({
    namespace: 'dep', // We can name this to whatever, will allow us to do `dep.require` instead of `require`
    baseUrl: ".", // Just tells the script to look in the same folder
    name: "require.2.3.6.js", // The input require script (whatever version DEP currently uses)
    out: "dep.require.2.3.6.js" // The output require script with our namespace changes
});
