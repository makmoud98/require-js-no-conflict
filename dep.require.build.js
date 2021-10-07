({
	namespace: 'dep_require', // We can name this to whatever, will allow us to do `dep.require` instead of `require`
    baseUrl: ".", // Just tells the script to look in the same folder
    name: "require.2.1.17.min.js", // The input require script (whatever version DEP currently uses)
    out: "dep.require.2.1.17.js" // The output require script with out namespace changes
});