/**
 * List of image files names available as puzzle image
 * @type {string[]}
 */
export const imageList = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
];

/**
 * Selects a random puzzle image filename
 * @param {string[]} [exclude] optional list of files to exclude from the list of available images
 * @returns {string} filename of a image file
 */
export const pickRandomImage = (exclude = []) => {
    const subList = imageList.filter(img => !exclude.includes(img));
    return subList[Math.floor(Math.random() * subList.length)];
}
