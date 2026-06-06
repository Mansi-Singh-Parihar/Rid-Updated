const validateEligibilityInput = (req, res, next) => {
    const { dob, qualification, state, category } = req.body;

    const errors = [];

    if (!dob) {
        errors.push("Date of birth is required");
    } else {
        const birth = new Date(dob);

        if (isNaN(birth.getTime())) {
            errors.push("Invalid date of birth");
        } else {
            const cutoff = new Date(
                `${new Date().getFullYear()}-08-01`
            );

            let age =
                cutoff.getFullYear() - birth.getFullYear();

            const m =
                cutoff.getMonth() - birth.getMonth();

            if (
                m < 0 ||
                (m === 0 &&
                    cutoff.getDate() < birth.getDate())
            ) {
                age--;
            }

            if (age < 14 || age > 65) {
                errors.push(
                    "Age must be between 14 and 65 years"
                );
            }
        }
    }

    if (!state) {
        errors.push("State is required");
    }

    if (!category) {
        errors.push("Category is required");
    }

    const validQualifications = [
        "8th",
        "10th",
        "12th",
        "Diploma",
        "Graduation",
        "Post Graduation",
    ];

    if (
        qualification &&
        !validQualifications.includes(qualification)
    ) {
        errors.push("Invalid qualification selected");
    }

    const validCategories = [
        "General",
        "OBC",
        "SC",
        "ST",
        "EWS",
        "PwBD",
        "Ex-Servicemen",
    ];

    if (
        category &&
        !validCategories.includes(category)
    ) {
        errors.push("Invalid category selected");
    }

    if (errors.length > 0) {
        return res.redirect(
            "/eligibility?error=" +
            encodeURIComponent(errors[0])
        );
    }

    next();
};

module.exports = {
    validateEligibilityInput,
};