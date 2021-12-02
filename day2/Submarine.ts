export default interface Submarine {
    depth: number
    horizontalPosition: number

    /**
     * Move the submarine forward by a specified distance.
     *
     * @param distance The distance to move forward. If a negative value is supplied,
     * the submarine will move backwards.
     */
    forward(distance: number): void

    /**
     * Move the submarine down by a specified amount.
     *
     * @param distance The distance to move downwards. If a negative value is supplied,
     * the submarine will move upwards.
     */
    down(distance: number): void

    /**
     * Move the submarine up by a specified amount.
     *
     * @param distance The distance to move upwards. If a negative value is supplied,
     * the submarine will move downwards.
     */
    up(distance: number): void
}
