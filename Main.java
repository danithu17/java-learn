import java.io.*;
import java.util.*;

/**
 * ============================================================================
 * JAVA LOOPS PRACTICE ARENA - GAME ENGINE (Main.java)
 * ============================================================================
 * Note: You DO NOT need to edit this file!
 * All your code goes into Challenges.java.
 * 
 * To compile and run:
 *   javac Main.java Challenges.java
 *   java Main
 * ============================================================================
 */
public class Main {

    // --- GAME STATE ---
    private static int totalXP = 0;
    private static int currentStreak = 0;
    private static int bestStreak = 0;
    private static final Set<Integer> completedChallenges = new HashSet<>();
    private static final Map<Integer, Integer> hintsUsedMap = new HashMap<>(); // challengeId -> hints used (0..3)
    private static final String PROGRESS_FILE = "progress.txt";

    // --- LEVEL DEFINITIONS ---
    private static final String[] LEVEL_NAMES = {
        "Level 1: Rookie",
        "Level 2: Learner",
        "Level 3: Coder",
        "Level 4: Loop Warrior",
        "Level 5: Loop Master"
    };

    private static final int[] LEVEL_THRESHOLDS = { 0, 150, 350, 600, 900 };

    // --- CHALLENGE REPOSITORY ---
    static class Challenge {
        int id;
        int level;
        String title;
        String task;
        String thinkFirst;
        String syntaxReminder;
        String expectedOutput;
        String[] hints;

        public Challenge(int id, int level, String title, String task,
                         String thinkFirst, String syntaxReminder,
                         String expectedOutput, String[] hints) {
            this.id = id;
            this.level = level;
            this.title = title;
            this.task = task;
            this.thinkFirst = thinkFirst;
            this.syntaxReminder = syntaxReminder;
            this.expectedOutput = expectedOutput;
            this.hints = hints;
        }
    }

    private static final List<Challenge> challenges = new ArrayList<>();

    public static void main(String[] args) {
        initChallenges();
        loadProgress();

        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        printWelcomeBanner();

        while (running) {
            printHeader();
            System.out.println("=== MAIN MENU ===");
            System.out.println("1. [Levels] Select Challenge by Level (1 to 5)");
            System.out.println("2. [Next]   Play Next Unsolved Challenge");
            System.out.println("3. [Review] Review Mode (Test memory on solved challenges)");
            System.out.println("4. [Stats]  View Profile & Progress");
            System.out.println("5. [Reset]  Reset Saved Progress");
            System.out.println("6. [Exit]   Save and Exit");
            System.out.print("\nEnter your choice (1-6): ");

            String input = scanner.nextLine().trim();
            switch (input) {
                case "1":
                    handleLevelMenu(scanner);
                    break;
                case "2":
                    playNextUnsolved(scanner);
                    break;
                case "3":
                    handleReviewMode(scanner);
                    break;
                case "4":
                    showStats();
                    pause(scanner);
                    break;
                case "5":
                    handleReset(scanner);
                    break;
                case "6":
                    saveProgress();
                    System.out.println("\nProgress saved successfully! Keep practicing. Happy coding! 🚀\n");
                    running = false;
                    break;
                default:
                    System.out.println("\nInvalid choice. Please choose 1 to 6.");
            }
        }
    }

    // ========================================================================
    // MENU HANDLERS
    // ========================================================================

    private static void handleLevelMenu(Scanner scanner) {
        while (true) {
            printHeader();
            System.out.println("=== SELECT A LEVEL ===");
            System.out.println("1. Level 1: Basic For Loops (Repetition & Stepping)");
            System.out.println("2. Level 2: For + If (Conditions, Break & Continue)");
            System.out.println("3. Level 3: While & Do-While (Condition-Driven Loops)");
            System.out.println("4. Level 4: Nested Loops (Patterns, Pyramids & Grids)");
            System.out.println("5. Level 5: Logic Problems (Interview & Math Algorithms)");
            System.out.println("B. Back to Main Menu");
            System.out.print("\nChoose Level (1-5 or B): ");

            String choice = scanner.nextLine().trim();
            if (choice.equalsIgnoreCase("B")) return;

            int levelNum;
            try {
                levelNum = Integer.parseInt(choice);
                if (levelNum < 1 || levelNum > 5) {
                    System.out.println("Please enter a number between 1 and 5.");
                    continue;
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input.");
                continue;
            }

            handleChallengeList(scanner, levelNum);
        }
    }

    private static void handleChallengeList(Scanner scanner, int levelNum) {
        while (true) {
            printHeader();
            System.out.println("=== LEVEL " + levelNum + " CHALLENGES ===");
            List<Challenge> levelChallenges = new ArrayList<>();
            for (Challenge c : challenges) {
                if (c.level == levelNum) levelChallenges.add(c);
            }

            for (Challenge c : levelChallenges) {
                boolean done = completedChallenges.contains(c.id);
                String status = done ? "[PASS \u2713]" : "[      ]";
                System.out.printf("%s #%02d: %s\n", status, c.id, c.title);
            }
            System.out.println("B. Back to Levels");
            System.out.print("\nEnter Challenge Number to open (e.g. " + levelChallenges.get(0).id + ") or B: ");

            String input = scanner.nextLine().trim();
            if (input.equalsIgnoreCase("B")) return;

            try {
                int id = Integer.parseInt(input);
                Challenge target = getChallengeById(id);
                if (target == null || target.level != levelNum) {
                    System.out.println("Challenge #" + id + " is not in Level " + levelNum + ".");
                    pause(scanner);
                } else {
                    playChallenge(scanner, target);
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid input.");
            }
        }
    }

    private static void playNextUnsolved(Scanner scanner) {
        for (Challenge c : challenges) {
            if (!completedChallenges.contains(c.id)) {
                playChallenge(scanner, c);
                return;
            }
        }
        System.out.println("\n\uD83C\uDF89 AMAZING! You have completed ALL 30 challenges!");
        System.out.println("Try 'Review Mode' to test your memory, or reset to play again.");
        pause(scanner);
    }

    private static void handleReviewMode(Scanner scanner) {
        if (completedChallenges.isEmpty()) {
            System.out.println("\nYou haven't completed any challenges yet! Complete some challenges first.");
            pause(scanner);
            return;
        }

        List<Integer> solvedList = new ArrayList<>(completedChallenges);
        Collections.shuffle(solvedList);
        int targetId = solvedList.get(0);
        Challenge c = getChallengeById(targetId);

        printHeader();
        System.out.println("=======================================================");
        System.out.println(" \uD83E\uDDE0 REVIEW MODE - TEST YOUR MEMORY!");
        System.out.println("=======================================================");
        System.out.println("Challenge #" + c.id + ": " + c.title + " (Level " + c.level + ")");
        System.out.println("\nTask: " + c.task);
        System.out.println("\nCan you remember how to solve this in Challenges.challenge" + c.id + "()?");
        System.out.println("[T] Test Solution Now   |   [H] View Think First & Reminders   |   [B] Back");
        System.out.print("Choice: ");

        String choice = scanner.nextLine().trim().toUpperCase();
        if (choice.equals("H")) {
            playChallenge(scanner, c);
        } else if (choice.equals("T")) {
            testChallengeCode(scanner, c, true);
        }
    }

    private static void handleReset(Scanner scanner) {
        System.out.print("\nAre you SURE you want to reset all XP and progress? (yes/no): ");
        String confirm = scanner.nextLine().trim();
        if (confirm.equalsIgnoreCase("yes")) {
            totalXP = 0;
            currentStreak = 0;
            bestStreak = 0;
            completedChallenges.clear();
            hintsUsedMap.clear();
            File f = new File(PROGRESS_FILE);
            if (f.exists()) f.delete();
            System.out.println("\nProgress has been reset! Fresh start. Let's go!");
        } else {
            System.out.println("\nReset cancelled.");
        }
        pause(scanner);
    }

    // ========================================================================
    // CHALLENGE SCREEN & LOGIC
    // ========================================================================

    private static void playChallenge(Scanner scanner, Challenge c) {
        while (true) {
            printHeader();
            boolean isDone = completedChallenges.contains(c.id);
            System.out.println("======================================================================");
            System.out.printf(" CHALLENGE #%02d: %s  %s\n", c.id, c.title, isDone ? "[\u2705 SOLVED]" : "[\u23F3 UNSOLVED]");
            System.out.println(" Level: " + c.level + " (" + LEVEL_NAMES[c.level - 1] + ")");
            System.out.println(" Method to edit: Challenges.challenge" + c.id + "()");
            System.out.println("======================================================================");
            
            System.out.println("\n\uD83D\uDCDD TASK:");
            System.out.println(c.task);

            System.out.println("\n\uD83D\uDCA1 THINK FIRST (Step-by-step logic):");
            System.out.println(c.thinkFirst);

            System.out.println("\n\uD83D\uDCD8 SYNTAX REMINDER (Skeleton):");
            System.out.println(c.syntaxReminder);

            System.out.println("\n\uD83C\uDFAF EXPECTED OUTPUT:");
            System.out.println(indent(c.expectedOutput, "    "));

            int hintsUsed = hintsUsedMap.getOrDefault(c.id, 0);
            System.out.println("\nHints revealed: " + hintsUsed + " / 3");

            System.out.println("\n----------------------------------------------------------------------");
            System.out.println("[T] Test My Code   |   [H] Get Next Hint (" + (3 - hintsUsed) + " left)   |   [B] Back");
            System.out.print("Action (T/H/B): ");

            String action = scanner.nextLine().trim().toUpperCase();
            if (action.equals("B")) {
                return;
            } else if (action.equals("H")) {
                revealHint(scanner, c);
            } else if (action.equals("T")) {
                boolean passed = testChallengeCode(scanner, c, false);
                if (passed) {
                    return; // Return to list after passing
                }
            } else {
                System.out.println("Invalid option. Please choose T, H, or B.");
                pause(scanner);
            }
        }
    }

    private static void revealHint(Scanner scanner, Challenge c) {
        int used = hintsUsedMap.getOrDefault(c.id, 0);
        if (used >= 3) {
            System.out.println("\nYou have already revealed all 3 hints for this challenge!");
            for (int i = 0; i < 3; i++) {
                System.out.println("Hint " + (i + 1) + ": " + c.hints[i]);
            }
        } else {
            used++;
            hintsUsedMap.put(c.id, used);
            System.out.println("\n\uD83D\uDD0D HINT #" + used + " REVEALED (Note: using hints slightly reduces reward XP):");
            System.out.println(">>> " + c.hints[used - 1]);
        }
        pause(scanner);
    }

    private static boolean testChallengeCode(Scanner scanner, Challenge c, boolean isReview) {
        System.out.println("\nRunning Challenges.challenge" + c.id + "()...\n");

        // Capture System.out
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PrintStream originalOut = System.out;
        PrintStream originalErr = System.err;
        PrintStream ps = new PrintStream(baos);

        System.setOut(ps);
        System.setErr(ps);

        Throwable thrown = null;
        try {
            runChallengeMethod(c.id);
        } catch (Throwable t) {
            thrown = t;
        } finally {
            System.out.flush();
            System.setOut(originalOut);
            System.setErr(originalErr);
        }

        String rawOutput = baos.toString();
        String actualOutput = rawOutput.replace("\r\n", "\n").trim();
        String expectedNormalized = c.expectedOutput.replace("\r\n", "\n").trim();

        if (thrown != null) {
            System.out.println("\u274C EXCEPTION ENCOUNTERED WHILE RUNNING YOUR CODE:");
            System.out.println("Type: " + thrown.getClass().getName());
            System.out.println("Message: " + thrown.getMessage());
            System.out.println("\nTip: Make sure you compiled Challenges.java before running!");
            currentStreak = 0;
            pause(scanner);
            return false;
        }

        if (actualOutput.equals(expectedNormalized)) {
            // PASS!
            int oldLevel = getLevelNumber(totalXP);
            boolean firstTime = !completedChallenges.contains(c.id);

            int hintsUsed = hintsUsedMap.getOrDefault(c.id, 0);
            int baseXP = 30 - (hintsUsed * 5); // 30, 25, 20, 15
            if (baseXP < 10) baseXP = 10;

            currentStreak++;
            if (currentStreak > bestStreak) bestStreak = currentStreak;

            int streakBonus = (currentStreak >= 3) ? 10 : (currentStreak == 2 ? 5 : 0);
            int earnedXP = firstTime ? (baseXP + streakBonus) : 5; // Repeat gives 5 review XP

            totalXP += earnedXP;
            completedChallenges.add(c.id);
            saveProgress();

            int newLevel = getLevelNumber(totalXP);

            System.out.println("=======================================================");
            System.out.println("\u2705 PASS! \uD83C\uDF89 EXCELLENT WORK!");
            System.out.println("=======================================================");
            System.out.println("Your output matched the expected output perfectly!");
            System.out.println("+ " + earnedXP + " XP earned! " + (streakBonus > 0 ? "(\uD83D\uDD25 Streak Bonus +" + streakBonus + " XP)" : ""));
            System.out.println("Current Streak: " + currentStreak + " in a row \uD83D\uDD25");

            if (newLevel > oldLevel) {
                printLevelUpBanner(newLevel);
            }

            pause(scanner);
            return true;
        } else {
            // FAIL
            currentStreak = 0; // reset streak
            System.out.println("=======================================================");
            System.out.println("\u274C FAIL - Output does not match yet.");
            System.out.println("=======================================================");
            System.out.println("Don't worry! Converting thoughts to syntax takes practice.\n");
            
            System.out.println("--- [EXPECTED OUTPUT] ---");
            System.out.println(expectedNormalized.isEmpty() ? "(Empty)" : expectedNormalized);
            System.out.println("-------------------------");
            
            System.out.println("\n--- [YOUR OUTPUT] ---");
            if (actualOutput.isEmpty()) {
                System.out.println("(Nothing was printed! Did you write System.out.println inside Challenges.challenge" + c.id + "?)");
            } else {
                System.out.println(actualOutput);
            }
            System.out.println("---------------------");

            int used = hintsUsedMap.getOrDefault(c.id, 0);
            if (used < 3) {
                System.out.println("\nTip: Press [H] in the challenge menu to get a hint!");
            }
            pause(scanner);
            return false;
        }
    }

    // ========================================================================
    // METHOD DISPATCHER FOR CHALLENGES
    // ========================================================================

    private static void runChallengeMethod(int id) {
        switch (id) {
            case 1:  Challenges.challenge1(); break;
            case 2:  Challenges.challenge2(); break;
            case 3:  Challenges.challenge3(); break;
            case 4:  Challenges.challenge4(); break;
            case 5:  Challenges.challenge5(); break;
            case 6:  Challenges.challenge6(); break;
            case 7:  Challenges.challenge7(); break;
            case 8:  Challenges.challenge8(); break;
            case 9:  Challenges.challenge9(); break;
            case 10: Challenges.challenge10(); break;
            case 11: Challenges.challenge11(); break;
            case 12: Challenges.challenge12(); break;
            case 13: Challenges.challenge13(); break;
            case 14: Challenges.challenge14(); break;
            case 15: Challenges.challenge15(); break;
            case 16: Challenges.challenge16(); break;
            case 17: Challenges.challenge17(); break;
            case 18: Challenges.challenge18(); break;
            case 19: Challenges.challenge19(); break;
            case 20: Challenges.challenge20(); break;
            case 21: Challenges.challenge21(); break;
            case 22: Challenges.challenge22(); break;
            case 23: Challenges.challenge23(); break;
            case 24: Challenges.challenge24(); break;
            case 25: Challenges.challenge25(); break;
            case 26: Challenges.challenge26(); break;
            case 27: Challenges.challenge27(); break;
            case 28: Challenges.challenge28(); break;
            case 29: Challenges.challenge29(); break;
            case 30: Challenges.challenge30(); break;
            default:
                System.out.println("Challenge ID " + id + " not implemented.");
        }
    }

    // ========================================================================
    // XP, LEVEL, AND UI HELPERS
    // ========================================================================

    private static int getLevelNumber(int xp) {
        for (int i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
            if (xp >= LEVEL_THRESHOLDS[i]) {
                return i + 1; // 1 to 5
            }
        }
        return 1;
    }

    private static String getXPBarString(int xp) {
        int lvl = getLevelNumber(xp);
        int currentLevelBase = LEVEL_THRESHOLDS[lvl - 1];
        int nextLevelTarget = (lvl < 5) ? LEVEL_THRESHOLDS[lvl] : LEVEL_THRESHOLDS[4] + 300;

        int span = nextLevelTarget - currentLevelBase;
        int progressInLevel = Math.max(0, xp - currentLevelBase);
        int percent = Math.min(100, (int) ((progressInLevel / (double) span) * 100));

        int barLength = 20;
        int filled = (int) (barLength * (percent / 100.0));
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < filled; i++) sb.append("#");
        for (int i = filled; i < barLength; i++) sb.append("-");
        sb.append("] ");
        sb.append(xp).append("/").append(nextLevelTarget).append(" XP");
        return sb.toString();
    }

    private static void printHeader() {
        System.out.println("\n----------------------------------------------------------------------");
        int lvl = getLevelNumber(totalXP);
        String lvlName = LEVEL_NAMES[lvl - 1];
        String bar = getXPBarString(totalXP);
        System.out.printf(" \uD83C\uDFC6 %-24s  %s  | \uD83D\uDD25 Streak: %d\n", lvlName, bar, currentStreak);
        System.out.println(" Completed: " + completedChallenges.size() + "/30 Challenges");
        System.out.println("----------------------------------------------------------------------");
    }

    private static void printWelcomeBanner() {
        System.out.println("======================================================================");
        System.out.println("    ____     ___     _   __    ____     _____       ___     ____     ______ ");
        System.out.println("   / __ \\   /   |   | | / /   /   |    / ___/      /   |   / __ \\   / ____/");
        System.out.println("  / / / /  / /| |   | |/ /   / /| |    \\__ \\      / /| |  / /_/ /  / __/   ");
        System.out.println(" / /_/ /  / ___ |   | / /   / ___ |   ___/ /     / ___ | / _, _/  / /___   ");
        System.out.println("/_____/  /_/  |_|   |_/    /_/  |_|  /____/     /_/  |_|/_/ |_|  /_____/   ");
        System.out.println("                     JAVA LOOPS PRACTICE ARENA                         ");
        System.out.println("======================================================================");
        System.out.println("Welcome, future Java Master! Loops give code superpowers.");
        System.out.println("Rule 1: Think the logic first in English.");
        System.out.println("Rule 2: Fill the loop skeleton.");
        System.out.println("Rule 3: Repeat until your fingers remember!");
        System.out.println("======================================================================");
    }

    private static void printLevelUpBanner(int newLevel) {
        System.out.println("\n*******************************************************");
        System.out.println(" \u2B50\u2B50\u2B50 LEVEL UP! LEVEL UP! LEVEL UP! \u2B50\u2B50\u2B50");
        System.out.println(" You are now: " + LEVEL_NAMES[newLevel - 1].toUpperCase() + "!");
        System.out.println(" New challenges unlocked! Keep the momentum going! \uD83D\uDD25");
        System.out.println("*******************************************************");
    }

    private static void showStats() {
        printHeader();
        System.out.println("=== PLAYER PROFILE ===");
        int lvl = getLevelNumber(totalXP);
        System.out.println("Rank: " + LEVEL_NAMES[lvl - 1]);
        System.out.println("Total XP: " + totalXP);
        System.out.println("Current Streak: " + currentStreak);
        System.out.println("Best Streak: " + bestStreak);
        System.out.println("Completed Challenges: " + completedChallenges.size() + " of 30");

        System.out.println("\nBreakdown by Level:");
        for (int l = 1; l <= 5; l++) {
            int count = 0;
            for (Challenge c : challenges) {
                if (c.level == l && completedChallenges.contains(c.id)) count++;
            }
            System.out.printf("  Level %d: %d/6 solved\n", l, count);
        }
    }

    private static void pause(Scanner scanner) {
        System.out.print("\nPress [Enter] to continue...");
        scanner.nextLine();
    }

    private static String indent(String text, String prefix) {
        String[] lines = text.split("\n");
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < lines.length; i++) {
            sb.append(prefix).append(lines[i]);
            if (i < lines.length - 1) sb.append("\n");
        }
        return sb.toString();
    }

    private static Challenge getChallengeById(int id) {
        for (Challenge c : challenges) {
            if (c.id == id) return c;
        }
        return null;
    }

    // ========================================================================
    // PERSISTENCE (progress.txt)
    // ========================================================================

    private static void saveProgress() {
        try (PrintWriter pw = new PrintWriter(new FileWriter(PROGRESS_FILE))) {
            pw.println("XP=" + totalXP);
            pw.println("STREAK=" + currentStreak);
            pw.println("BEST_STREAK=" + bestStreak);
            
            StringBuilder completedStr = new StringBuilder();
            for (int id : completedChallenges) {
                if (completedStr.length() > 0) completedStr.append(",");
                completedStr.append(id);
            }
            pw.println("COMPLETED=" + completedStr.toString());

            StringBuilder hintsStr = new StringBuilder();
            for (Map.Entry<Integer, Integer> entry : hintsUsedMap.entrySet()) {
                if (hintsStr.length() > 0) hintsStr.append(",");
                hintsStr.append(entry.getKey()).append(":").append(entry.getValue());
            }
            pw.println("HINTS=" + hintsStr.toString());
        } catch (IOException e) {
            System.out.println("Warning: Unable to save progress to " + PROGRESS_FILE);
        }
    }

    private static void loadProgress() {
        File file = new File(PROGRESS_FILE);
        if (!file.exists()) return;

        try (BufferedReader br = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = br.readLine()) != null) {
                line = line.trim();
                if (line.startsWith("XP=")) {
                    totalXP = Integer.parseInt(line.substring(3).trim());
                } else if (line.startsWith("STREAK=")) {
                    currentStreak = Integer.parseInt(line.substring(7).trim());
                } else if (line.startsWith("BEST_STREAK=")) {
                    bestStreak = Integer.parseInt(line.substring(12).trim());
                } else if (line.startsWith("COMPLETED=")) {
                    String part = line.substring(10).trim();
                    if (!part.isEmpty()) {
                        String[] ids = part.split(",");
                        for (String s : ids) {
                            if (!s.trim().isEmpty()) {
                                completedChallenges.add(Integer.parseInt(s.trim()));
                            }
                        }
                    }
                } else if (line.startsWith("HINTS=")) {
                    String part = line.substring(6).trim();
                    if (!part.isEmpty()) {
                        String[] pairs = part.split(",");
                        for (String p : pairs) {
                            String[] kv = p.split(":");
                            if (kv.length == 2) {
                                hintsUsedMap.put(Integer.parseInt(kv[0].trim()), Integer.parseInt(kv[1].trim()));
                            }
                        }
                    }
                }
            }
        } catch (Exception e) {
            System.out.println("Notice: Could not parse previous progress file. Starting fresh.");
        }
    }

    // ========================================================================
    // ALL 30 CHALLENGE DEFINITIONS
    // ========================================================================

    private static void initChallenges() {
        challenges.clear();

        // ------------------ LEVEL 1: FOR LOOPS ------------------
        challenges.add(new Challenge(
            1, 1, "Count 1 to 10",
            "Print numbers from 1 to 10, each on a new line.",
            "1. Start counting with a variable at 1.\n" +
            "2. Repeat as long as the counter is less than or equal to 10.\n" +
            "3. In each step, print the current number.\n" +
            "4. Increase the counter by 1 after each print.",
            "+-------------------------------------------------+\n" +
            "| for (int i = start; i <= end; i++) {            |\n" +
            "|     // code inside runs each time               |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
            new String[]{
                "Set your loop to: for (int i = 1; i <= 10; i++)",
                "Inside the loop, use System.out.println(i);",
                "Complete code: for (int i = 1; i <= 10; i++) { System.out.println(i); }"
            }
        ));

        challenges.add(new Challenge(
            2, 1, "Countdown 10 to 1",
            "Print numbers backwards from 10 down to 1, each on a new line.",
            "1. Start counting at 10.\n" +
            "2. Keep repeating as long as the number is >= 1.\n" +
            "3. In each step, print the number.\n" +
            "4. Decrease the number by 1 (using i--) after each step.",
            "+-------------------------------------------------+\n" +
            "| for (int i = 10; i >= 1; i--) {                 |\n" +
            "|     System.out.println(i);                      |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "10\n9\n8\n7\n6\n5\n4\n3\n2\n1",
            new String[]{
                "Start at 10 instead of 1: int i = 10.",
                "The condition should check if i is greater than or equal to 1: i >= 1.",
                "Decrease i each time: i--. Inside: System.out.println(i);"
            }
        ));

        challenges.add(new Challenge(
            3, 1, "Even Numbers 2 to 20",
            "Print even numbers from 2 up to 20, each on a new line.",
            "1. Start at 2.\n" +
            "2. Repeat as long as the number is <= 20.\n" +
            "3. Print the number.\n" +
            "4. Jump by 2 each time (i += 2) instead of +1.",
            "+-------------------------------------------------+\n" +
            "| for (int i = start; i <= end; i += step) {      |\n" +
            "|     System.out.println(i);                      |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "2\n4\n6\n8\n10\n12\n14\n16\n18\n20",
            new String[]{
                "Start with int i = 2; stop at i <= 20.",
                "To skip by two, write i += 2 in the update part of the for loop.",
                "Structure: for (int i = 2; i <= 20; i += 2) { System.out.println(i); }"
            }
        ));

        challenges.add(new Challenge(
            4, 1, "Multiples of 5 up to 50",
            "Print multiples of 5 from 5 up to 50, each on a new line.",
            "1. Start at 5.\n" +
            "2. Repeat while number is <= 50.\n" +
            "3. Print the number.\n" +
            "4. Add 5 in each iteration (i += 5).",
            "+-------------------------------------------------+\n" +
            "| for (int i = 5; i <= 50; i += 5) {              |\n" +
            "|     System.out.println(i);                      |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "5\n10\n15\n20\n25\n30\n35\n40\n45\n50",
            new String[]{
                "The initial value is int i = 5, and the limit is i <= 50.",
                "Increment by 5 using: i += 5",
                "Loop: for (int i = 5; i <= 50; i += 5) { System.out.println(i); }"
            }
        ));

        challenges.add(new Challenge(
            5, 1, "Sum of 1 to 10",
            "Calculate the total sum of numbers from 1 to 10 and print ONLY the final total.",
            "1. Create a total 'bucket' before the loop: int sum = 0;\n" +
            "2. Loop through numbers 1 to 10.\n" +
            "3. Inside the loop, add each number into the bucket: sum += i;\n" +
            "4. AFTER the loop finishes, print the bucket (sum).",
            "+-------------------------------------------------+\n" +
            "| int sum = 0;                                    |\n" +
            "| for (int i = 1; i <= 10; i++) {                 |\n" +
            "|     sum += i; // add to running total           |\n" +
            "| }                                               |\n" +
            "| System.out.println(sum); // print OUTSIDE loop  |\n" +
            "+-------------------------------------------------+",
            "55",
            new String[]{
                "Create 'int sum = 0;' BEFORE the loop.",
                "Inside the loop: sum += i; (or sum = sum + i;)",
                "Make sure System.out.println(sum); is placed OUTSIDE the loop braces {}."
            }
        ));

        challenges.add(new Challenge(
            6, 1, "Sum of 1 to 100",
            "Calculate the total sum of numbers from 1 to 100 and print ONLY the final total.",
            "1. Declare int sum = 0;\n" +
            "2. Loop from i = 1 to 100.\n" +
            "3. Add each i to sum.\n" +
            "4. Print sum after loop ends.",
            "+-------------------------------------------------+\n" +
            "| int sum = 0;                                    |\n" +
            "| for (int i = 1; i <= 100; i++) { ... }          |\n" +
            "| System.out.println(sum);                        |\n" +
            "+-------------------------------------------------+",
            "5050",
            new String[]{
                "Same as Challenge 5, but change the condition to i <= 100.",
                "Accumulate using sum += i;",
                "Print only the final sum: System.out.println(sum);"
            }
        ));

        // ------------------ LEVEL 2: FOR + IF ------------------
        challenges.add(new Challenge(
            7, 2, "Count Even and Odd Numbers (1 to 10)",
            "Loop from 1 to 10. Count how many numbers are even and how many are odd.\n" +
            "Print exactly:\nEvens: 5\nOdds: 5",
            "1. Create two counters before loop: int evens = 0; int odds = 0;\n" +
            "2. Loop from 1 to 10.\n" +
            "3. If (i % 2 == 0) increase evens++ else increase odds++.\n" +
            "4. After loop, print \"Evens: \" + evens and \"Odds: \" + odds.",
            "+-------------------------------------------------+\n" +
            "| if (number % 2 == 0) {                          |\n" +
            "|     // even                                     |\n" +
            "| } else {                                        |\n" +
            "|     // odd                                      |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "Evens: 5\nOdds: 5",
            new String[]{
                "Initialize 'int evens = 0;' and 'int odds = 0;' before the loop.",
                "Inside the loop: if (i % 2 == 0) { evens++; } else { odds++; }",
                "After loop: System.out.println(\"Evens: \" + evens); System.out.println(\"Odds: \" + odds);"
            }
        ));

        challenges.add(new Challenge(
            8, 2, "Multiplication Table of 7",
            "Print the multiplication table for 7 from 1 to 10 in the format: 7 x 1 = 7 ... 7 x 10 = 70",
            "1. Loop multiplier 'i' from 1 to 10.\n" +
            "2. In each iteration, calculate product = 7 * i.\n" +
            "3. Print: \"7 x \" + i + \" = \" + (7 * i)",
            "+-------------------------------------------------+\n" +
            "| for (int i = 1; i <= 10; i++) {                 |\n" +
            "|     System.out.println(n + \" x \" + i + \" = \" + (n * i)); |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
            new String[]{
                "Loop i from 1 to 10: for (int i = 1; i <= 10; i++)",
                "Print string concatenation: System.out.println(\"7 x \" + i + \" = \" + (7 * i));",
                "Make sure spacing matches: '7 x i = result'"
            }
        ));

        challenges.add(new Challenge(
            9, 2, "Factorial of 5",
            "Calculate 5! (5 * 4 * 3 * 2 * 1) and print ONLY the final answer (120).",
            "1. Start with int fact = 1; (Note: MUST be 1, because 0 * anything is 0!).\n" +
            "2. Loop i from 1 to 5.\n" +
            "3. In each step: fact = fact * i;\n" +
            "4. Print fact outside the loop.",
            "+-------------------------------------------------+\n" +
            "| int fact = 1;                                   |\n" +
            "| for (int i = 1; i <= n; i++) {                  |\n" +
            "|     fact *= i;                                  |\n" +
            "| }                                               |\n" +
            "| System.out.println(fact);                       |\n" +
            "+-------------------------------------------------+",
            "120",
            new String[]{
                "Declare 'int fact = 1;' before loop.",
                "Loop from 1 to 5: fact *= i;",
                "Print fact at the end: System.out.println(fact);"
            }
        ));

        challenges.add(new Challenge(
            10, 2, "Power of a Number (2^6)",
            "Calculate 2 raised to power 6 without Math.pow() and print the result.",
            "1. Base is 2, exponent is 6.\n" +
            "2. Start with int result = 1;\n" +
            "3. Repeat 6 times: result = result * 2;\n" +
            "4. Print result outside the loop.",
            "+-------------------------------------------------+\n" +
            "| int result = 1;                                 |\n" +
            "| for (int i = 1; i <= power; i++) {              |\n" +
            "|     result *= base;                             |\n" +
            "| }                                               |\n" +
            "| System.out.println(result);                     |\n" +
            "+-------------------------------------------------+",
            "64",
            new String[]{
                "Set 'int result = 1;'",
                "Loop i from 1 to 6, in each step do: result *= 2;",
                "Print result: System.out.println(result);"
            }
        ));

        challenges.add(new Challenge(
            11, 2, "Skip Multiples of 3 (Continue)",
            "Loop from 1 to 10. If a number is divisible by 3, skip it using 'continue'. Print other numbers.",
            "1. Loop i from 1 to 10.\n" +
            "2. Check if i is divisible by 3: (i % 3 == 0).\n" +
            "3. If true, execute 'continue;' (skips straight to the next iteration).\n" +
            "4. Otherwise, print i.",
            "+-------------------------------------------------+\n" +
            "| for (int i = 1; i <= 10; i++) {                 |\n" +
            "|     if (i % 3 == 0) continue; // skip it!       |\n" +
            "|     System.out.println(i);                      |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "1\n2\n4\n5\n7\n8\n10",
            new String[]{
                "Use the modulo operator: if (i % 3 == 0)",
                "Inside the if block: continue;",
                "Put System.out.println(i); after the if check."
            }
        ));

        challenges.add(new Challenge(
            12, 2, "Stop at First Multiple of 7 (Break)",
            "Loop i from 1 to 50. When you find the first multiple of 7, print 'Found: ' + i and stop with 'break'.",
            "1. Loop i from 1 to 50.\n" +
            "2. Check if (i % 7 == 0).\n" +
            "3. When found, print \"Found: \" + i.\n" +
            "4. Immediately exit the loop with 'break;'.",
            "+-------------------------------------------------+\n" +
            "| for (int i = 1; i <= 50; i++) {                 |\n" +
            "|     if (condition) {                            |\n" +
            "|         System.out.println(\"Found: \" + i);      |\n" +
            "|         break; // terminates the loop           |\n" +
            "|     }                                           |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "Found: 7",
            new String[]{
                "Inside for loop: if (i % 7 == 0)",
                "Print: System.out.println(\"Found: \" + i);",
                "Follow immediately with: break;"
            }
        ));

        // ------------------ LEVEL 3: WHILE & DO-WHILE ------------------
        challenges.add(new Challenge(
            13, 3, "While Countdown with Blastoff",
            "Using a while loop, countdown from 5 to 1, then print 'Blastoff!'.",
            "1. Create variable: int n = 5;\n" +
            "2. Loop while (n > 0).\n" +
            "3. Inside loop: print n, then decrement n (n--).\n" +
            "4. After the while loop finishes, print \"Blastoff!\".",
            "+-------------------------------------------------+\n" +
            "| int n = 5;                                      |\n" +
            "| while (n > 0) {                                 |\n" +
            "|     System.out.println(n);                      |\n" +
            "|     n--;                                        |\n" +
            "| }                                               |\n" +
            "| System.out.println(\"Blastoff!\");                |\n" +
            "+-------------------------------------------------+",
            "5\n4\n3\n2\n1\nBlastoff!",
            new String[]{
                "Set int n = 5; condition: while (n >= 1) or while (n > 0)",
                "Print n and remember to decrease n: n--;",
                "After the while loop curly braces: System.out.println(\"Blastoff!\");"
            }
        ));

        challenges.add(new Challenge(
            14, 3, "Count Digits of a Number",
            "Given number 48259, count how many digits it has using a while loop.\nPrint: Digits: 5",
            "1. int num = 48259; int count = 0;\n" +
            "2. As long as num > 0:\n" +
            "   a. Remove last digit by dividing by 10: num = num / 10;\n" +
            "   b. Increase count++.\n" +
            "3. Print \"Digits: \" + count.",
            "+-------------------------------------------------+\n" +
            "| while (num > 0) {                               |\n" +
            "|     num /= 10; // strips off last digit         |\n" +
            "|     count++;                                    |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "Digits: 5",
            new String[]{
                "In Java, integer division 48259 / 10 becomes 4825 (the last digit is dropped).",
                "Loop while (num > 0): num /= 10; count++;",
                "Print result: System.out.println(\"Digits: \" + count);"
            }
        ));

        challenges.add(new Challenge(
            15, 3, "Sum of Digits",
            "Calculate the sum of digits of 12345 (1+2+3+4+5 = 15).\nPrint: Sum: 15",
            "1. int num = 12345; int sum = 0;\n" +
            "2. While num > 0:\n" +
            "   a. Get last digit using modulo: int digit = num % 10;\n" +
            "   b. Add digit to sum: sum += digit;\n" +
            "   c. Discard last digit: num /= 10;\n" +
            "3. Print \"Sum: \" + sum.",
            "+-------------------------------------------------+\n" +
            "| while (num > 0) {                               |\n" +
            "|     int lastDigit = num % 10;                   |\n" +
            "|     sum += lastDigit;                           |\n" +
            "|     num /= 10;                                  |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "Sum: 15",
            new String[]{
                "To get the last digit of any number, use: num % 10",
                "Add it to sum: sum += (num % 10); then chop it: num /= 10;",
                "Print after loop: System.out.println(\"Sum: \" + sum);"
            }
        ));

        challenges.add(new Challenge(
            16, 3, "Reverse a Number",
            "Reverse the number 9876 so it prints 6789.",
            "1. int num = 9876; int rev = 0;\n" +
            "2. While num > 0:\n" +
            "   a. Extract last digit: int d = num % 10;\n" +
            "   b. Shift rev left and add digit: rev = (rev * 10) + d;\n" +
            "   c. Cut num: num /= 10;\n" +
            "3. Print rev.",
            "+-------------------------------------------------+\n" +
            "| int rev = 0;                                    |\n" +
            "| while (num > 0) {                               |\n" +
            "|     rev = rev * 10 + (num % 10);                |\n" +
            "|     num /= 10;                                  |\n" +
            "| }                                               |\n" +
            "| System.out.println(rev);                        |\n" +
            "+-------------------------------------------------+",
            "6789",
            new String[]{
                "Building reversed number: rev = rev * 10 + (num % 10);",
                "Shrink number: num /= 10;",
                "Print rev when while loop ends: System.out.println(rev);"
            }
        ));

        challenges.add(new Challenge(
            17, 3, "Do-While Guaranteed Run",
            "Demonstrate a do-while loop running once even when false.\n" +
            "Set x = 10, print 'Executed with x=10' inside body, loop condition (x < 5).",
            "1. Initialize int x = 10;\n" +
            "2. Use 'do { ... } while (x < 5);'.\n" +
            "3. Inside body: System.out.println(\"Executed with x=\" + x);\n" +
            "4. Notice: even though 10 < 5 is FALSE, the body executes once first!",
            "+-------------------------------------------------+\n" +
            "| do {                                            |\n" +
            "|     // executes at least once!                  |\n" +
            "| } while (condition);                            |\n" +
            "+-------------------------------------------------+",
            "Executed with x=10",
            new String[]{
                "Start with int x = 10;",
                "Write: do { System.out.println(\"Executed with x=\" + x); } while (x < 5);",
                "Don't forget the semicolon ';' at the end of 'while (...);'!"
            }
        ));

        challenges.add(new Challenge(
            18, 3, "Halving until One",
            "Start with num = 64. While num >= 1, print num, then divide by 2.",
            "1. int num = 64;\n" +
            "2. While (num >= 1):\n" +
            "   a. Print num.\n" +
            "   b. Halve num: num = num / 2;\n" +
            "3. Stops automatically when num drops below 1.",
            "+-------------------------------------------------+\n" +
            "| int num = 64;                                   |\n" +
            "| while (num >= 1) {                              |\n" +
            "|     System.out.println(num);                    |\n" +
            "|     num /= 2;                                   |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "64\n32\n16\n8\n4\n2\n1",
            new String[]{
                "Condition is: while (num >= 1)",
                "Inside loop: System.out.println(num); followed by num /= 2;",
                "Outputs 64, 32, 16, 8, 4, 2, 1."
            }
        ));

        // ------------------ LEVEL 4: NESTED LOOPS ------------------
        challenges.add(new Challenge(
            19, 4, "Square Pattern of Stars (4x4)",
            "Print a 4x4 square of stars (4 rows of 4 stars).",
            "1. Outer loop 'row' runs 4 times (1 to 4).\n" +
            "2. Inner loop 'col' runs 4 times (1 to 4).\n" +
            "3. Inside inner loop: print \"*\" with System.out.print (NOT println!).\n" +
            "4. After inner loop finishes, move to next row with System.out.println().",
            "+-------------------------------------------------+\n" +
            "| for (int r = 1; r <= 4; r++) {                  |\n" +
            "|     for (int c = 1; c <= 4; c++) {              |\n" +
            "|         System.out.print(\"*\");                  |\n" +
            "|     }                                           |\n" +
            "|     System.out.println(); // next line          |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "****\n****\n****\n****",
            new String[]{
                "Remember: System.out.print(\"*\") stays on the same line.",
                "System.out.println() with nothing inside moves to the next line.",
                "Both loops run 4 times: for (int r = 1; r <= 4; r++)"
            }
        ));

        challenges.add(new Challenge(
            20, 4, "Star Triangle (Height 5)",
            "Print a right triangle of stars with 5 rows:\n*\n**\n***\n****\n*****",
            "1. Outer loop 'row' goes from 1 to 5.\n" +
            "2. Inner loop 'col' goes from 1 to 'row' (Row 1 gets 1 star, Row 2 gets 2 stars...).\n" +
            "3. Inside inner loop: System.out.print(\"*\");\n" +
            "4. After inner loop: System.out.println();",
            "+-------------------------------------------------+\n" +
            "| for (int r = 1; r <= 5; r++) {                  |\n" +
            "|     for (int c = 1; c <= r; c++) {              |\n" +
            "|         System.out.print(\"*\");                  |\n" +
            "|     }                                           |\n" +
            "|     System.out.println();                       |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "*\n**\n***\n****\n*****",
            new String[]{
                "Notice the relationship: on row 'r', print 'r' stars.",
                "So inner loop limit is: c <= r",
                "Inner prints '*', outer finishes each row with System.out.println();"
            }
        ));

        challenges.add(new Challenge(
            21, 4, "Inverted Star Triangle (Height 5)",
            "Print an inverted right triangle of stars:\n*****\n****\n***\n**\n*",
            "1. Outer loop 'row' starts at 5 and counts down to 1 (r--).\n" +
            "2. Inner loop 'col' goes from 1 to 'row'.\n" +
            "3. Inside inner loop: System.out.print(\"*\");\n" +
            "4. After inner loop: System.out.println();",
            "+-------------------------------------------------+\n" +
            "| for (int r = 5; r >= 1; r--) {                  |\n" +
            "|     for (int c = 1; c <= r; c++) {              |\n" +
            "|         System.out.print(\"*\");                  |\n" +
            "|     }                                           |\n" +
            "|     System.out.println();                       |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "*****\n****\n***\n**\n*",
            new String[]{
                "Outer loop counts down: for (int r = 5; r >= 1; r--)",
                "Inner loop prints r stars: for (int c = 1; c <= r; c++)",
                "Print newline after each row."
            }
        ));

        challenges.add(new Challenge(
            22, 4, "Number Row Triangle",
            "Print row numbers repeated:\n1\n22\n333\n4444",
            "1. Outer loop 'i' from 1 to 4.\n" +
            "2. Inner loop 'j' from 1 to 'i'.\n" +
            "3. Print 'i' (the row number) without newline: System.out.print(i);\n" +
            "4. Print newline after inner loop.",
            "+-------------------------------------------------+\n" +
            "| for (int i = 1; i <= 4; i++) {                  |\n" +
            "|     for (int j = 1; j <= i; j++) {              |\n" +
            "|         System.out.print(i);                    |\n" +
            "|     }                                           |\n" +
            "|     System.out.println();                       |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "1\n22\n333\n4444",
            new String[]{
                "In row 1, print '1' once. In row 2, print '2' twice.",
                "Inside inner loop: System.out.print(i);",
                "After inner loop: System.out.println();"
            }
        ));

        challenges.add(new Challenge(
            23, 4, "Floyd's Triangle (1 to 6)",
            "Print sequential numbers in 3 rows:\n1\n2 3\n4 5 6",
            "1. Create int val = 1; outside the loops.\n" +
            "2. Outer loop row from 1 to 3.\n" +
            "3. Inner loop col from 1 to row.\n" +
            "4. Print val. If not the last number of row, print a space.\n" +
            "5. Increment val++.\n" +
            "6. Print newline at end of row.",
            "+-------------------------------------------------+\n" +
            "| int val = 1;                                    |\n" +
            "| for (int r = 1; r <= 3; r++) {                  |\n" +
            "|     for (int c = 1; c <= r; c++) {              |\n" +
            "|         System.out.print(val);                  |\n" +
            "|         if (c < r) System.out.print(\" \");       |\n" +
            "|         val++;                                  |\n" +
            "|     }                                           |\n" +
            "|     System.out.println();                       |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "1\n2 3\n4 5 6",
            new String[]{
                "Keep 'int val = 1;' OUTSIDE both loops so it doesn't reset.",
                "For spacing: System.out.print(val + (c == r ? \"\" : \" \")); val++;",
                "Outer loop goes up to 3 rows."
            }
        ));

        challenges.add(new Challenge(
            24, 4, "Mini Multiplication Grid (3x3)",
            "Print a 3x3 table of products with spaces between numbers on each row:\n1 2 3\n2 4 6\n3 6 9",
            "1. Outer loop i from 1 to 3.\n" +
            "2. Inner loop j from 1 to 3.\n" +
            "3. Print product (i * j). Add a space between numbers.\n" +
            "4. Print newline after each row.",
            "+-------------------------------------------------+\n" +
            "| for (int i = 1; i <= 3; i++) {                  |\n" +
            "|     for (int j = 1; j <= 3; j++) {              |\n" +
            "|         System.out.print((i * j) + (j < 3 ? \" \" : \"\")); |\n" +
            "|     }                                           |\n" +
            "|     System.out.println();                       |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "1 2 3\n2 4 6\n3 6 9",
            new String[]{
                "Both loops run from 1 to 3: for (int i = 1; i <= 3; i++)",
                "Product is (i * j).",
                "On each row, separate with space: System.out.print((i * j) + (j < 3 ? \" \" : \"\"));"
            }
        ));

        // ------------------ LEVEL 5: LOGIC PROBLEMS ------------------
        challenges.add(new Challenge(
            25, 5, "FizzBuzz (1 to 15)",
            "Loop 1 to 15. If divisible by 3 & 5 -> FizzBuzz, by 3 -> Fizz, by 5 -> Buzz, else the number.",
            "1. Loop i from 1 to 15.\n" +
            "2. CRITICAL: Check (i % 15 == 0) or (i % 3 == 0 && i % 5 == 0) FIRST!\n" +
            "3. Else if (i % 3 == 0) -> print \"Fizz\".\n" +
            "4. Else if (i % 5 == 0) -> print \"Buzz\".\n" +
            "5. Else -> print i.",
            "+-------------------------------------------------+\n" +
            "| if (i % 15 == 0) {                              |\n" +
            "|     System.out.println(\"FizzBuzz\");             |\n" +
            "| } else if (i % 3 == 0) {                        |\n" +
            "|     System.out.println(\"Fizz\");                 |\n" +
            "| } else if (i % 5 == 0) {                        |\n" +
            "|     System.out.println(\"Buzz\");                 |\n" +
            "| } else {                                        |\n" +
            "|     System.out.println(i);                      |\n" +
            "| }                                               |\n" +
            "+-------------------------------------------------+",
            "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
            new String[]{
                "Order of 'if' checks is crucial: always check 15 first!",
                "If you checked 3 first, 15 would print 'Fizz' instead of 'FizzBuzz'.",
                "Loop runs from 1 to 15 inclusive: for (int i = 1; i <= 15; i++)"
            }
        ));

        challenges.add(new Challenge(
            26, 5, "Prime Number Check",
            "Check if number 29 is prime. If prime, print '29 is PRIME'.",
            "1. int n = 29; boolean isPrime = true;\n" +
            "2. If n <= 1, it is not prime.\n" +
            "3. Loop divisor 'i' from 2 up to n - 1:\n" +
            "   If (n % i == 0), then it's divisible: isPrime = false; break;\n" +
            "4. After loop, if isPrime is still true, print: n + \" is PRIME\".",
            "+-------------------------------------------------+\n" +
            "| boolean isPrime = true;                         |\n" +
            "| for (int i = 2; i < n; i++) {                   |\n" +
            "|     if (n % i == 0) { isPrime = false; break; } |\n" +
            "| }                                               |\n" +
            "| if (isPrime) System.out.println(n + \" is PRIME\");|\n" +
            "+-------------------------------------------------+",
            "29 is PRIME",
            new String[]{
                "A prime number has no divisors other than 1 and itself.",
                "Loop from 2 up to 28: if (29 % i == 0) isPrime = false;",
                "At the end: if (isPrime) System.out.println(n + \" is PRIME\");"
            }
        ));

        challenges.add(new Challenge(
            27, 5, "First 8 Fibonacci Numbers",
            "Print the first 8 Fibonacci numbers on one line separated by spaces:\n0 1 1 2 3 5 8 13",
            "1. Start with a = 0, b = 1.\n" +
            "2. Print: a + \" \" + b\n" +
            "3. Loop 6 more times (i = 3 to 8):\n" +
            "   a. int c = a + b;\n" +
            "   b. Print: \" \" + c;\n" +
            "   c. Shift values: a = b; b = c;\n" +
            "4. Print newline at end.",
            "+-------------------------------------------------+\n" +
            "| int a = 0, b = 1;                               |\n" +
            "| System.out.print(a + \" \" + b);                  |\n" +
            "| for (int i = 3; i <= 8; i++) {                  |\n" +
            "|     int next = a + b;                           |\n" +
            "|     System.out.print(\" \" + next);               |\n" +
            "|     a = b;                                      |\n" +
            "|     b = next;                                   |\n" +
            "| }                                               |\n" +
            "| System.out.println();                           |\n" +
            "+-------------------------------------------------+",
            "0 1 1 2 3 5 8 13",
            new String[]{
                "Print first two terms (0 and 1) initially.",
                "Each new term is the sum of previous two: next = a + b;",
                "Update: a = b; b = next; and print with leading space."
            }
        ));

        challenges.add(new Challenge(
            28, 5, "Palindrome Number Check",
            "Check if number 12321 is a palindrome (reads same backward). Print '12321 is PALINDROME'.",
            "1. int original = 12321; int temp = original; int rev = 0;\n" +
            "2. Reverse temp using while loop: rev = rev * 10 + (temp % 10); temp /= 10;\n" +
            "3. Check: if (original == rev), print: original + \" is PALINDROME\".",
            "+-------------------------------------------------+\n" +
            "| int temp = original, rev = 0;                   |\n" +
            "| while (temp > 0) {                              |\n" +
            "|     rev = rev * 10 + (temp % 10);               |\n" +
            "|     temp /= 10;                                 |\n" +
            "| }                                               |\n" +
            "| if (original == rev) ...                        |\n" +
            "+-------------------------------------------------+",
            "12321 is PALINDROME",
            new String[]{
                "Use a copy of original (temp) so you don't destroy original during while loop.",
                "Reverse using rev = rev * 10 + (temp % 10); temp /= 10;",
                "Compare: if (original == rev) System.out.println(original + \" is PALINDROME\");"
            }
        ));

        challenges.add(new Challenge(
            29, 5, "Greatest Common Divisor (GCD of 48 and 18)",
            "Find the GCD of 48 and 18 using a loop. Print: GCD: 6",
            "1. int a = 48, b = 18;\n" +
            "2. While (b != 0):\n" +
            "   a. int remainder = a % b;\n" +
            "   b. a = b;\n" +
            "   c. b = remainder;\n" +
            "3. After loop, 'a' holds the GCD!\n" +
            "4. Print: \"GCD: \" + a.",
            "+-------------------------------------------------+\n" +
            "| while (b != 0) {                                |\n" +
            "|     int rem = a % b;                            |\n" +
            "|     a = b;                                      |\n" +
            "|     b = rem;                                    |\n" +
            "| }                                               |\n" +
            "| System.out.println(\"GCD: \" + a);                |\n" +
            "+-------------------------------------------------+",
            "GCD: 6",
            new String[]{
                "Euclid's algorithm: repeatedly replace (a, b) with (b, a % b).",
                "Loop while b != 0: int rem = a % b; a = b; b = rem;",
                "Print GCD: System.out.println(\"GCD: \" + a);"
            }
        ));

        challenges.add(new Challenge(
            30, 5, "Sum of Even Fibonacci Numbers Below 100",
            "Generate Fibonacci numbers below 100. Sum only the even numbers (2, 8, 34). Print: Sum of Evens: 44",
            "1. Start with a = 0, b = 1, sum = 0;\n" +
            "2. While (b < 100):\n" +
            "   a. If (b % 2 == 0), add to sum: sum += b;\n" +
            "   b. Next term: int next = a + b; a = b; b = next;\n" +
            "3. Print: \"Sum of Evens: \" + sum.",
            "+-------------------------------------------------+\n" +
            "| int a = 0, b = 1, sum = 0;                      |\n" +
            "| while (b < 100) {                               |\n" +
            "|     if (b % 2 == 0) sum += b;                   |\n" +
            "|     int next = a + b; a = b; b = next;          |\n" +
            "| }                                               |\n" +
            "| System.out.println(\"Sum of Evens: \" + sum);     |\n" +
            "+-------------------------------------------------+",
            "Sum of Evens: 44",
            new String[]{
                "Check evenness with: if (b % 2 == 0) sum += b;",
                "The even Fibonacci numbers below 100 are 2, 8, 34 (sum is 44).",
                "Print: System.out.println(\"Sum of Evens: \" + sum);"
            }
        ));
    }
}
