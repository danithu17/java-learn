import { forLoopModule } from './forLoop.js';
import { whileLoopModule } from './whileLoop.js';
import { doWhileLoopModule } from './doWhileLoop.js';

/**
 * ============================================================================
 * MODULE REGISTRY
 * ============================================================================
 * To add a new module:
 * 1. Create your module file in src/modules/yourModule.js
 * 2. Import it here and add it to the `modules` array below!
 * ============================================================================
 */
export const modules = [
  // 1. Unlocked & fully playable modules
  forLoopModule,
  whileLoopModule,
  doWhileLoopModule,

  // 2. Future expansion modules (Locked placeholders)
  {
    id: 'nested-loops',
    title: 'Nested Loops & 2D Patterns',
    icon: 'Grid',
    description: 'Loops inside loops! Craft star pyramids, Floyd’s triangles, multiplication grids, and 2D arrays.',
    badge: 'Coming Soon',
    locked: true,
    totalChallenges: 25,
    lessons: [],
    challenges: []
  },
  {
    id: 'break-continue',
    title: 'Break & Continue Control',
    icon: 'Zap',
    description: 'Take full control of execution flow. Exit early with break or skip unwanted iterations with continue.',
    badge: 'Coming Soon',
    locked: true,
    totalChallenges: 15,
    lessons: [],
    challenges: []
  }
];

export function getModuleById(id) {
  return modules.find(m => m.id === id) || null;
}
