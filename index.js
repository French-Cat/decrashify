module.exports = function (silent = true) { process.on("uncaughtException", function (err) { if (!silent) { 
            console.error(err);
        }
    });
};
