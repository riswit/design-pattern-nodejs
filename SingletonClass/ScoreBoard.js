class ScoreBoard {
 
    constructor() {
        this.board = [];
    }
 
    join(name) {
        this.board.push({
            name,
            scores: 0
        });
    }
 
    leave(name) {
        this.board = this.board.filter(player => player.name !== name);
    }
 
    update(name, scores) {
        const playerIdx = this.board.findIndex(player => player.name === name);
        if (playerIdx > -1) {
            this.board[playerIdx].scores += scores;
        }
    }
 
    showScores() {
        return this.board;
    }
 
    getWinner() {
        return this.sort()[0];
    }
    
    sort() {
        return this.board.sort((p1, p2) => p2.scores - p1.scores);
    }
}
 
module.exports = new ScoreBoard();