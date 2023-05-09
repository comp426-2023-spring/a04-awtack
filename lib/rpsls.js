const win_condition = {
    'rock': {
        'rock': 'tie',
        'scissors': 'win',
        'lizard': 'win',
        'spock': 'lose',
        'paper': 'lose'
    },
    'paper': {
        'paper': 'tie',
        'rock': 'win',
        'spock': 'win',
        'scissors': 'lose',
        'lizard': 'lose'
    },
     'scissors': {
        'scissors': 'tie',
        'paper': 'win',
        'lizard': 'win',
        'rock': 'lose',
        'spock': 'lose'
    },
    'lizard': {
        'lizard': 'tie',
        'paper': 'win',
        'spock': 'win',
        'rock': 'lose',
        'scissors': 'lose'
    }, 'spock': {
        'spock': 'tie',
        'rock': 'win',
        'scissors': 'win',
        'paper': 'lose',
        'lizard': 'lose'
    }

}


export function rps(prs){
    const game_pieces = ["rock", "paper", "scissors"];

    const index = Math.floor(Math.random()*3);
    const oppo = game_pieces[index];
    if(prs===undefined){
        return{player : oppo };
    }
    const lower = prs.toLowerCase();
    if(!(game_pieces.includes(prs))){
        console.error(`${prs} is out of range.`);
        throw new RangeError(`${prs} is out of range.`);
    }
    return({
        player: lower,
        opponent: oppo,
        result: win_condition[prs][oppo]
        });
}


export function rpsls(slprs){
    const game_pieces = ["rock", "paper", "scissors", "lizard", "spock"];
    const index = Math.floor(Math.random()*5);
    const oppo = game_pieces[index];
    if(slprs===undefined){
        return{
            player : oppo
        };
    }
    const lower = slprs.toLowerCase();
    if(!(game_pieces.includes(slprs))){
        console.error(`${slprs} is out of range.`);
        throw new RangeError(`${slprs} is out of range.`);
    }
    return({
        player: lower,
        opponent: oppo,
        result: win_condition[slprs][oppo]
        });
}
