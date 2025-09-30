import { describe, it, expect } from 'vitest';
import { cfx } from '../src/index';

describe('cfx', () => {
  it('should merge basic classes', () => {
    expect(cfx('base-btn', true && 'active-btn')).toBe('base-btn active-btn');
    expect(cfx('base-btn', false && 'active-btn')).toBe('base-btn');
  });

  it('should handle variant-based styling', () => {
    const result = cfx(
      'alert',
      {
        variants: {
          type: {
            success: 'alert-success',
            error: 'alert-error',
            warning: 'alert-warning',
          },
        },
        defaultVariants: { type: 'success' },
      },
      { type: 'error' }
    );
    expect(result).toBe('alert alert-error');
  });

  it('should use default variants when not specified', () => {
    const result = cfx(
      'alert',
      {
        variants: {
          type: {
            success: 'alert-success',
          },
        },
        defaultVariants: { type: 'success' },
      }
    );
    expect(result).toBe('alert alert-success');
  });

  it('should combine base styles, variants, and additional classes', () => {
    const result = cfx(
      'base-card',
      {
        variants: {
          size: {
            small: 'card-small',
            large: 'card-large',
          },
          selected: {
            true: 'card-selected',
          },
        },
        defaultVariants: {
          size: 'small',
        },
      },
      { size: 'large', selected: true },
      'extra-shadow'
    );
    expect(result).toBe('base-card card-large card-selected extra-shadow');
  });

  it('should handle conditional class merging', () => {
    expect(cfx('nav-item', { active: true, inactive: false })).toBe('nav-item active');
    expect(cfx('nav-item', { active: false, inactive: true })).toBe('nav-item inactive');
  });

  it('should merge Tailwind CSS classes with conflict resolution', () => {
    expect(cfx('h-12 w-12 border', true && 'rounded-full')).toBe('h-12 w-12 border rounded-full');
  });

  it('should handle complex variant-based styling with custom properties', () => {
    const result = cfx(
      'badge',
      {
        variants: {
          type: {
            success: 'bg-green-500',
            error: 'bg-red-500',
            info: 'bg-blue-500',
          },
          size: {
            small: 'text-sm px-2',
            large: 'text-lg px-4',
          },
        },
        defaultVariants: {
          type: 'info',
          size: 'small',
        },
      },
      { type: 'error', size: 'large' },
      true && 'border border-current'
    );
    expect(result).toBe('badge bg-red-500 text-lg px-4 border border-current');
  });

  it('should handle dynamic class names for lists', () => {
    const tasks = [
      { id: 1, completed: true },
      { id: 2, completed: false },
    ];
    const classes = tasks.map(task => cfx('task-item', task.completed ? 'completed' : 'pending'));
    expect(classes).toEqual(['task-item completed', 'task-item pending']);
  });

  it('should handle inline boolean expressions for conditional styles', () => {
    expect(cfx('btn', [true && 'cursor-not-allowed opacity-50', false && 'hover:bg-blue-500'])).toBe('btn cursor-not-allowed opacity-50');
    expect(cfx('btn', [false && 'cursor-not-allowed opacity-50', true && 'hover:bg-blue-500'])).toBe('btn hover:bg-blue-500');
  });
});