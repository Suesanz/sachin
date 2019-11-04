import data from '../assets/csvjson';

//total run ,wicket, catch

const rwc = team => {
    let totalRun = 0, totalWicket = 0, totalCatch = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].opposition === team) {
            if (data[i].batting_score !== "TDNB" && data[i].batting_score !== "DNB") {
                totalRun += parseInt(data[i].batting_score, 10);
            }
            if (data[i].wickets !== "-") {
                totalWicket += parseInt(data[i].wickets, 10);
            }
            if (data[i].catches !== "-") {
                totalCatch += parseInt(data[i].catches, 10);
            }
        }
    }
    return {totalRun, totalCatch, totalWicket};
}
//total run for each team
const totalRun = team => {
    const runs = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].opposition === team) {
            runs.push({
                name: `Match${i + 1}`,
                runs: data[i].batting_score
            })
        }

    }
    return runs;
    // data.filter(item => item.opposition === team)
}

const WLD = team => {
    let won = 0;
    let lost = 0;
    let draw = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].opposition === team) {
            switch (data[i].match_result) {
                case "won":
                    won++;
                    break;
                case "lost":
                    lost++;
                    break;
                case "n/r":
                    draw++;
                    break;
                default:
                    break;
            }
        }
    }
    return {won, lost, draw};
};
//Return Stadium stats per team from data (for bar chart)
const stadium = team => {
    let stadiumList = new Set([]);
    let stadiumStats = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].opposition === team) {
            stadiumList.add(data[i].ground);
        }
    }

    //create an array of object for each unique stadium with default values(0)
    stadiumList.forEach(stadium => {
        return stadiumStats.push({
            ground: stadium,
            won: 0,
            lost: 0
        });
    });

    //update stadiumStats
    for (let i = 0; i < data.length; i++) {
        if (data[i].match_result === "won") {
            for (let j = 0; j < stadiumStats.length; j++) {
                if (
                    stadiumStats[j].ground === data[i].ground &&
                    data[i].opposition === team
                ) {
                    stadiumStats[j].won++;
                }
            }
        } else if (data[i].match_result === "lost" && data[i].opposition === team) {
            for (let j = 0; j < stadiumStats.length; j++) {
                if (stadiumStats[j].ground === data[i].ground) {
                    stadiumStats[j].lost++;
                }
            }
        }
    }
    return stadiumStats;
};

// Return opposition teams and respective matches from data (for team list)
const teams = () => {
    const teams = new Set([]);
    let teamStats = [];
    for (let i = 0; i < data.length; i++) {
        teams.add(data[i].opposition);
    }

    teams.forEach(team => {
        return teamStats.push({
            teamName: team,
            matches: 0
        });
    });

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < teamStats.length; j++) {
            if (teamStats[j].teamName === data[i].opposition) {
                teamStats[j].matches++;
            }
        }
    }

    let sortedTeamDetails = teamStats.sort((a, b) => {
        let nameA = a.teamName.replace(/\.| /g, "").toLowerCase();
        let nameB = b.teamName.replace(/\.| /g, "").toLowerCase();
        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    });

    return sortedTeamDetails;
};

export {
    teams,
    WLD,
    totalRun,
    rwc,
    stadium
};

