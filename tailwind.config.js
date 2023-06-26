module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                "other": { 'min': '340px', 'max': '1200px' },
            },
            colors: {
                darkbg: "#121063",
                blue : {
                    850 : "#075985"
                }
            }
        },
    },
    plugins: [],
}