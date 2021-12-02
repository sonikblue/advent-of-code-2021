import Submarine from './Submarine'

export default class SimpleSubmarine implements Submarine {
    depth: number
    horizontalPosition: number

    /**
     * Create a new SimpleSubmarine. Optionally, the initial position of the submarine can be specified.
     *
     * @param initialDepth The initial depth of the submarine.
     * @param initialHorizontalPosition The initial horizontal position of the submarine.
     */
    constructor(initialDepth: number = 0, initialHorizontalPosition: number = 0) {
      this.depth = initialDepth
      this.horizontalPosition = initialHorizontalPosition
    }

    /**
     * Move the submarine forward by a specified distance.
     *
     * @param distance The distance to move forward. If a negative value is supplied,
     * the submarine will move backwards.
     */
    forward(distance: number) {
      this.horizontalPosition += distance
    }

    /**
     * Decrease the submarine's depth by a specified amount.
     *
     * @param distance The distance to move downwards. If a negative value is supplied,
     * the submarine will move upwards.
     */
    down(distance: number) {
      this.depth += distance
    }

    /**
     * Increase the submarine's depth by a specified amount.
     *
     * @param distance The distance to move upwards. If a negative value is supplied,
     * the submarine will move downwards.
     */
    up(distance: number) {
      this.depth -= distance
    }
}
