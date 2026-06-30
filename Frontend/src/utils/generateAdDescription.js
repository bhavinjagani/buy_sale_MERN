/**
 * Calls the generateAdDescription GraphQL mutation.
 * @param {Function} mutationFn - the Apollo useMutation function
 * @param {Object} base - { title, category, condition }
 * @param {Object} extraDetails - key/value pairs of additional form fields (empty values are skipped)
 * @returns {Promise<string>} generated description
 */
export async function generateAdDescription(mutationFn, { title, category, condition }, extraDetails = {}) {
    const detailParts = Object.entries(extraDetails)
        .filter(([, value]) => value !== '' && value != null)
        .map(([label, value]) => `${label}: ${value}`);

    try {
        const { data } = await mutationFn({
            variables: {
                title,
                category,
                condition,
                details: detailParts.length ? detailParts.join('\n') : undefined,
            }
        });
        return data.generateAdDescription;
    } catch (err) {
        console.error('AI description generation failed:', err);
        throw new Error('Failed to generate description. Please try again.');
    }
}
