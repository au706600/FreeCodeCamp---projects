
// An array of people who regularly stream: 
// ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]

async function showTwitchStreamers(username)
{
    const userUrl = `https://twitch-proxy.freecodecamp.rocks/helix/users?login=${username}`;
    //const url = "https://twitch-proxy.freecodecamp.rocks/helix/streams?user_id=30220059";

    const userResponse = await fetch(userUrl);
    const userData = await userResponse.json();
    
    //console.log("data: ", userData);

    if(!userData.data || userData.data.length === 0)
    {
        return [];
    }

    const userId = userData.data[0].id;
    //console.log("id: ", userId);

    const displayName = userData.data[0].display_name;
    const login = userData.data[0].login;
    const profileImage = userData.data[0].profile_image_url; 

    const streamUserUrl = `https://twitch-proxy.freecodecamp.rocks/helix/streams?user_id=${userId}`;

    const streamUserResponse = await fetch(streamUserUrl);
    const streamUserData = await streamUserResponse.json();

    //console.log("streamData: ", streamUserData);

    if(streamUserData.data.length > 0)
    {
        const displayStreamInfo = streamUserData.data.map((streamer) => {
            
            return {
                login: login,
                profile_image: profileImage,
                display_name: displayName,
                online: true, 
                game_name: streamer.game_name, 
                title: streamer.title 
            };
        });

        //console.log("game name: title", `${streamGameName}: ${streamTitle}`);
        //console.log("Stream info: ", displayStreamInfo);

        return displayStreamInfo;
    }

    else
    {
        //console.log("User is offline");
        //return [];
        return [{
            login, login,
            profile_image: profileImage,
            display_name: displayName,
            online: false,
            game_name: "",
            title: "Offline"
        }];
    }
}

//console.log("ESL_SC2: ", showTwitchStreamers("ESL_SC2"));
//console.log("Cretetion: ", showTwitchStreamers("cretetion"));

module.exports = {showTwitchStreamers};

