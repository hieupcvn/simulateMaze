// var _ = require(underscore;
var state = {
    maze_id: 1,
    user_id: 1,
    current_cell_id: 1,
    maze_cell_ids: [1],
    gift_ids: [],
    completed_at: 0,
};


var mazeCells = [

    {id: 1, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 1, is_last_cell: 0}, 
    {id: 2, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 1, is_last_cell: 0},
    {id: 3, maze_id: 1, next_cell_id1: 1, next_cell_id2: 1, cell_reward_id: 2, is_last_cell: 0},
    {id: 4, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 3, is_last_cell: 0},
    {id: 5, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 4, is_last_cell: 0},
    {id: 6, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 5, is_last_cell: 0},
    {id: 7, maze_id: 1, next_cell_id1: 1, next_cell_id2: 1, cell_reward_id: 6, is_last_cell: 0},
    {id: 8, maze_id: 1, next_cell_id1: 10, next_cell_id2: 0, cell_reward_id: 7, is_last_cell: 0},
    {id: 9, maze_id: 1, next_cell_id1: 0, next_cell_id2: 12, cell_reward_id: 8, is_last_cell: 0},
    {id: 10, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 9, is_last_cell: 0},
    {id: 11, maze_id: 1, next_cell_id1: 10, next_cell_id2: 0, cell_reward_id: 10, is_last_cell: 0},
    {id: 12, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 11, is_last_cell: 0}, 
	{id: 13, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 12, is_last_cell: 0}, 
	{id: 14, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 13, is_last_cell: 0}, 
	{id: 15, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 14, is_last_cell: 0}, 
	{id: 16, maze_id: 1, next_cell_id1: 17, next_cell_id2: 0, cell_reward_id: 15, is_last_cell: 0}, 
	{id: 17, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 16, is_last_cell: 0}, 
	{id: 18, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 17, is_last_cell: 0}, 
	{id: 19, maze_id: 1, next_cell_id1: 0, next_cell_id2: 22, cell_reward_id: 18, is_last_cell: 0}, 
	{id: 20, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 19, is_last_cell: 0}, 
	{id: 21, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 20, is_last_cell: 0}, 
	{id: 22, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 21, is_last_cell: 0}, 
	{id: 23, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 22, is_last_cell: 0}, 
	{id: 24, maze_id: 1, next_cell_id1: 0, next_cell_id2: 28, cell_reward_id: 23, is_last_cell: 0}, 
	{id: 25, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 24, is_last_cell: 0}, 
	{id: 26, maze_id: 1, next_cell_id1: 24, next_cell_id2: 0, cell_reward_id: 25, is_last_cell: 0}, 
	{id: 27, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 26, is_last_cell: 0}, 
	{id: 28, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 27, is_last_cell: 0}, 
	{id: 29, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 28, is_last_cell: 0}, 
	{id: 30, maze_id: 1, next_cell_id1: 29, next_cell_id2: 0, cell_reward_id: 29, is_last_cell: 0}, 
	{id: 31, maze_id: 1, next_cell_id1: 0, next_cell_id2: 0, cell_reward_id: 30, is_last_cell: 1}, 
];

var mazeCellRewards = [
	{ id: 1, maze_id: 1, type: 1, gift_id: 1},
	{ id: 2, maze_id: 1, type: 1, gift_id: 2}, 
	{ id: 3, maze_id: 1, type: 1, gift_id: 3},
	{ id: 4, maze_id: 1, type: 1, gift_id: 4}, 
	{ id: 5, maze_id: 1, type: 1, gift_id: 5},
	{ id: 6, maze_id: 1, type: 1, gift_id: 6}, 
	{ id: 7, maze_id: 1, type: 1, gift_id: 7},
	{ id: 8, maze_id: 1, type: 1, gift_id: 8}, 
	{ id: 9, maze_id: 1, type: 1, gift_id: 9},
	{ id: 10, maze_id: 1, type: 1, gift_id: 10 }, 
	{ id: 11, maze_id: 1, type: 1, gift_id: 11 },
	{ id: 12, maze_id: 1, type: 1, gift_id: 12 }, 
	{ id: 13, maze_id: 1, type: 1, gift_id: 13 },
	{ id: 14, maze_id: 1, type: 1, gift_id: 14 }, 
	{ id: 15, maze_id: 1, type: 1, gift_id: 15 },
	{ id: 16, maze_id: 1, type: 1, gift_id: 16 }, 
	{ id: 17, maze_id: 1, type: 1, gift_id: 17 },
	{ id: 18, maze_id: 1, type: 1, gift_id: 18 }, 
	{ id: 19, maze_id: 1, type: 1, gift_id: 19 },
	{ id: 20, maze_id: 1, type: 1, gift_id: 20 }, 
	{ id: 21, maze_id: 1, type: 1, gift_id: 21 },
	{ id: 22, maze_id: 1, type: 1, gift_id: 22 }, 
	{ id: 23, maze_id: 1, type: 1, gift_id: 23 },
	{ id: 24, maze_id: 1, type: 1, gift_id: 24 }, 
	{ id: 25, maze_id: 1, type: 1, gift_id: 25 },
	{ id: 26, maze_id: 1, type: 1, gift_id: 26 }, 
	{ id: 27, maze_id: 1, type: 1, gift_id: 27 },
	{ id: 28, maze_id: 1, type: 1, gift_id: 28 }, 
	{ id: 29, maze_id: 1, type: 1, gift_id: 29 },
	{ id: 30, maze_id: 1, type: 1, gift_id: 30 }
];
// var mazeCellRewards = [mazeCellReward, mazeCellReward1];
// var gifts = [gift, gift1];
var gifts = [
	{ id: 1, type: 1, object_id: 1, value: 1 },
	{ id: 2, type: 1, object_id: 2, value: 2 },
	{ id: 3, type: 1, object_id: 3, value: 3 },
	{ id: 4, type: 1, object_id: 4, value: 4 },
	{ id: 5, type: 1, object_id: 5, value: 5 },
	{ id: 6, type: 1, object_id: 6, value: 6 },
	{ id: 7, type: 1, object_id: 7, value: 7 },
	{ id: 8, type: 1, object_id: 8, value: 8 },
	{ id: 9, type: 1, object_id: 9, value: 9 },
	{ id: 10, type: 1, object_id: 10, value: 10 },
	{ id: 11, type: 1, object_id: 11, value: 11 },
	{ id: 12, type: 1, object_id: 12, value: 12 },
	{ id: 13, type: 1, object_id: 13, value: 13 },
	{ id: 14, type: 1, object_id: 14, value: 14 },
	{ id: 15, type: 1, object_id: 15, value: 15 },
	{ id: 16, type: 1, object_id: 16, value: 16 },
	{ id: 17, type: 1, object_id: 17, value: 17 },
	{ id: 18, type: 1, object_id: 18, value: 18 },
	{ id: 19, type: 1, object_id: 19, value: 19 },
	{ id: 20, type: 1, object_id: 20, value: 20 },
	{ id: 21, type: 1, object_id: 21, value: 21 },
	{ id: 22, type: 1, object_id: 22, value: 22 },
	{ id: 23, type: 1, object_id: 23, value: 23 },
	{ id: 24, type: 1, object_id: 24, value: 24 },
	{ id: 25, type: 1, object_id: 25, value: 25 },
	{ id: 26, type: 1, object_id: 26, value: 26 },
	{ id: 27, type: 1, object_id: 27, value: 27 },
	{ id: 28, type: 1, object_id: 28, value: 28 },
	{ id: 29, type: 1, object_id: 29, value: 29 },
	{ id: 30, type: 1, object_id: 30, value: 30 }
];


function findObject(array, id){
    for (var i = 0; i < array.length; ++i) {
        if(array[i].id == id) {
            return array[i];
        }
    }
};

function recevied_reward(state) {

    var mazeCellId = state.current_cell_id;
    var cellObject = findObject(mazeCells, mazeCellId);
    
    var cellRewardId = cellObject.cell_reward_id;
    if (cellRewardId) {
    	var rewardObject = findObject(mazeCellRewards, cellRewardId);
    	var giftId = rewardObject.gift_id;
    	state.gift_ids.push(giftId);
    }
   
    // console.log(JSON.stringify(state))
}

function isLastMazeCell(mazeCellId) {
	var mazeCellObject = findObject(mazeCells, mazeCellId);
	return mazeCellObject.is_last_cell
}

function isPassed(maze_cell_ids, mazeCellId) {
	return maze_cell_ids.indexOf(mazeCellId) !== -1
}

function normal_move(state, direction) {
    var currentCellId = state.current_cell_id + direction; // 1: forward, -1: back
    state.current_cell_id = currentCellId;
    // console.log("maze_cell_ids: " + state.maze_cell_ids + " direction: "+direction);

    if (!isPassed(state.maze_cell_ids, currentCellId)) {
    	state.maze_cell_ids.push(currentCellId);
        recevied_reward(state);
    }
    
    //Check maze cell whether is last or not
    if (isLastMazeCell(state.current_cell_id)) {
    	state.completed_at = 1;
    }

    return state;

}

function special_move(state) {
    var mazeCellObject = findObject(mazeCells, state.current_cell_id);

    if (mazeCellObject.next_cell_id1 > state.current_cell_id) {
        var direction = 1;
        var len = mazeCellObject.next_cell_id1 - state.current_cell_id;
    } else {
        var direction = -1;
        var len = state.current_cell_id - mazeCellObject.next_cell_id1;
    }

    for (var i = 0 ; i < len; i++) {
        stateResult =  normal_move(state, direction);
        console.log(JSON.stringify(stateResult));
    }
    return state;
}

function jump(state) {
    var mazeCellObject = findObject(mazeCells, state.current_cell_id);
    state.current_cell_id = mazeCellObject.next_cell_id2;
    if (!isPassed(state.maze_cell_ids, state.current_cell_id)) {
    	state.maze_cell_ids.push(state.current_cell_id);
    	recevied_reward(state);
    }
    console.log(JSON.stringify(state));
    return state;

}

function move(state, item_use) {
    var direction = 1;
    var mazeCellObject1 = findObject(mazeCells, state.current_cell_id);
    // console.log("mazeCellObject1: " + JSON.stringify(mazeCellObject1));
    if(mazeCellObject1.next_cell_id2) {
    	console.log("Jump: ")
        var jumpResult = jump(state);
        item_use -= 1;
        // console.log("jumpResult: " + JSON.stringify(jumpResult));
    }
    for (var i = 0; i < item_use; ++i) {
        stateResult = normal_move(state, direction);
        currentState = stateResult;
        console.log(JSON.stringify(stateResult));
        if(state.completed_at) {
            console.log("Complete road of Chrismas");
            return 0;
        }
    }
    
    var mazeCellObject2 = findObject(mazeCells, state.current_cell_id);
    // console.log("mazeCellObject: " + JSON.stringify(mazeCellObject2));
    if (mazeCellObject2.next_cell_id1 && mazeCellObject2.next_cell_id2) {
    	console.log("Come back to start: ")
        var jumpResult = jump(state);
        // console.log("jumpResult: " + JSON.stringify(jumpResult));
    }
    else if (mazeCellObject2.next_cell_id1) {
    	console.log("special_move: ")
        var specialMoveResult = special_move(state);
        // console.log("specialMoveResult: " + JSON.stringify(specialMoveResult));
    }

    return state;
} 
function inputConfirm(cost) {
	var exit = 1;
	console.log("Enter your item_use: ");
    var stdin = process.openStdin();
    stdin.setEncoding('utf8');
    stdin.on('data', function(input){
        if (input.indexOf('q') !== -1 || !exit) {
            process.exit();
        } else {
            var item_use = parseInt(input);
            cost += item_use;
            console.log("Total cost: " + cost);
            exit = move(state, item_use);
            // console.log("Enter: "+input);
        }
    });
}


function main() {
    console.log("Start: "+ JSON.stringify(state));
    // var item_use = 3;
    // move(state, item_use);
    var cost = 0;
    inputConfirm(cost);

}

main();