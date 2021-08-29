const firstPlayer = 'x';
const secondPlayer = 'o';
const nextPlayer = {
    [firstPlayer]: secondPlayer,
    [secondPlayer]: firstPlayer
};
class TicTacToe {
    constructor() {
        this.currentPlayer = firstPlayer;

        this.gameField = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] === null) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = nextPlayer[this.currentPlayer];
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        switch (true) {
            case (this.gameField[0][0] == this.gameField[0][1] && this.gameField[0][0] == this.gameField[0][2]) : return this.gameField[0][2];
            case (this.gameField[1][0] == this.gameField[1][1] && this.gameField[1][0] == this.gameField[1][2]) : return this.gameField[1][2];
            case (this.gameField[2][0] == this.gameField[2][1] && this.gameField[2][0] == this.gameField[2][2]) : return this.gameField[2][2];
            case (this.gameField[0][0] == this.gameField[1][0] && this.gameField[0][0] == this.gameField[2][0]) : return this.gameField[2][0];
            case (this.gameField[0][1] == this.gameField[1][1] && this.gameField[0][1] == this.gameField[2][1]) : return this.gameField[2][1];
            case (this.gameField[0][2] == this.gameField[1][2] && this.gameField[0][2] == this.gameField[2][2]) : return this.gameField[2][2];
            case (this.gameField[0][0] == this.gameField[1][1] && this.gameField[0][0] == this.gameField[2][2]) : return this.gameField[2][2];
            case (this.gameField[0][2] == this.gameField[1][1] && this.gameField[0][2] == this.gameField[2][0]) : return this.gameField[2][0];
            default: return null;
        }
    }

    noMoreTurns() {
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 0; j < this.gameField[0].length; j++) {
                if (this.gameField[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
