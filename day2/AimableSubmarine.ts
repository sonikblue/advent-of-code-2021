import Submarine from './Submarine'

export default class AimableSubmarine implements Submarine {
    depth: number
    horizontalPosition: number
    aim: number

    /**
     * Create a new AimableSubmarine. Optionally, the initial position and aim of the submarine can be specified.
     *
     * @param initialDepth The initial depth of the submarine.
     * @param initialHorizontalPosition The initial horizontal position of the submarine.
     * @param initalAim The initial aim of the submarine.
     */
    constructor(initialDepth: number = 0, initialHorizontalPosition: number = 0, initalAim: number = 0) {
      this.depth = initialDepth
      this.horizontalPosition = initialHorizontalPosition
      this.aim = initalAim
    }

    /**
     * Move the submarine forward by a specified distance.
     *
     * @param distance The distance to move forward. If a negative value is supplied,
     * the submarine will move backwards.
     */
    forward(distance: number) {
      this.horizontalPosition += distance
      this.depth += this.aim * distance
    }

    /**
     * Increase the submarine's aim by a specified amount.
     *
     * @param distance The distance to aim downwards. If a negative value is supplied,
     * the submarine will aim upwards.
     */
    down(distance: number) {
      this.aim += distance
    }

    /**
     * Increase the submarine's aim by a specified amount.
     *
     * @param distance The distance to aim upwards. If a negative value is supplied,
     * the submarine will aim downwards.
     */
    up(distance: number) {
      this.aim -= distance
    }
}
