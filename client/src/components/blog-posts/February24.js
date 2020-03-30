import React from 'react'

function February24(props) {
    return (
        <div className={props.className}>
            <div className='blog-post'>
                <h3 className='code-title'>February 24, 2020</h3>
                <p className='code-text'>Tic Tac Toe.... I never thought such a simple game would be the bane of my existence, but let me tell you, I felt like I was playing Celeste (if you haven't played this game yet... you should) B-Sides coding the AI to play this simple game over the weekend. Thankfully, Celeste B-Sides (albeit incredibly difficult) are super fun! Before diving into the specifics, I have to admit.... the difficulty here was mostly brought on by myself. I did my usual thing of diving really deep and overthinking the problem, and it led me down some pretty deep rabbit holes. The deepest of those rabbit holes was MiniMax.</p>
                <p className='code-text'>If you don't know what MiniMax is, it's basically an algorithm that can be used to figure out the best possible move in deterministic games. It does this by looking some amount of moves ahead in a game, and assigning scores to each move based on the outcome of that move. During this determination, the player making the move is trying to maximize their best results (positive scores for positive outcomes), while minimizing the opponents best results (negative scores for negative outcomes) ...hence MiniMax. Sounds totally simple right? I thought so too, but then I dove in.</p>
                <p className='code-text'>I should probably say that I went this route because I had already done the Tic Tac Toe project in the part time Javascript class I took a few months ago. I had built an AI that played the game perfectly that time around, but the first few turns of the game were very much hard coded in. To challenge myself (because pain is progress! ... that isn't meant to sound as rough as it does ...) this time around, I wanted to write a script that figured out those first couple moves, and every other move on it's own.</p>
                <p className='code-text'>So lets dive into the coding process. My first attempt, obviously following the most proper order of trying things, was the deepest dive. I wrote a script that first built every single possible board state branching off from every possible move on the board. Even for a game like Tic Tac Toe, that can be a lot of boards. On an empty board, there are 362,880 possible board states, which is a crazy amount of data to process for a game as simple as Tic Tac Toe.</p>
                <div className='blog-img-wrapper'>
                    <img className='blog-img' src='./images/blog-img/buildStatesCodeSnip.png' alt='Code snippet' />
                </div>
                <p className='code-text'>This code snippet builds each possible board state for a single turn. It creates an object for each state, with the keys of board, playerX, playerO, and score. The board is an array of open moves on the board (spaces indexed 0-8), each player has an array of the moves they have taken, and then an initial score is set to 0. After the board is built, it is passed to a scoring function (detScore). The scoring function at this point of my journey set a positive 10 to the score if the maximizing player won on that board, a negative 10 if the minimizing player won on that board, and a 0 if there were no wins on the current board. The minimax function itself would then call buildStates on each sequential open move on the tree, and keep pushing the best scores up.</p>
                <p className='code-text'>I don't have a code snippet for the minimax function at this state, because it went through so many iterations, and pretty much all of them were broken in one way or another. The board states would build correctly, but the scoring algorithm was where I was running into trouble. I kept running into corner cases where the game would not play ideally, but all these cases arose when the human player was not playing ideally. Thanks to an awesome conversation about the miniMax algorithm with one of my teachers, I ended up trying looking just one move ahead, and scoring each move based on the amount of paths to victory for each player would be left with on that board. I set points based on a few conditions. If the maximizing player could win, it would add a score of positive 20 to ensure it picked that spot, then positive 3 if it was setting up win in one move, and positive 1 if it was setting up a win in two more moves. Then the score function minimized each move based on the opponents paths to victory in a similar fashion. The scoring code looked like this:</p>
                <div className='blog-img-wrapper'>
                    <img className='blog-img' src='./images/blog-img/detScoreCodeSnip.png' alt='Code snippet' />
                </div>
                <p className='code-text'>Basically, what this is doing is determing how many possible wins each player has on the board, and assigning the score based on that. Then a makeMove function looks at all of those scores, and determines the best move:</p>
                <div className='blog-img-wrapper'>
                    <img className='blog-img' src='./images/blog-img/makeMoveCodeSnip.png' alt='Code snippet' />
                </div>
                <p className='code-text'>If you'll notice, there is a small caveat to this approach. If the human player does not play ideally in one corner case, the algorithm doesn't know how to handle it. This only occurs on a board state like this:</p>
                <div className='blog-img-wrapper'>
                    <img className='blog-img' style={{width: '30%'}} src='./images/blog-img/ticTacToeBoardSample.png' alt='Tic Tac Toe Screenshot' />
                </div>
                <p className='code-text'>This problem could be solved by going a couple turns deeper and looking at the depth of the moves, or by simply making a determined move if the board hits that state. I'll be honest, it was getting late and I was staring at anything and everything minimax for so long that I went with the latter. Either way, this was a great learning experience, and a fun challenge to solve. There are many ways to approach this game from a coding standpoint, and I very much enjoyed exploring many of them. I will say, next time I have a problem like this, I'll (try to at least) follow the advice that I always tend to give, and start small. Coding is easier when you build up, not down.</p>
                <p className='code-text'>I hope you enjoyed this rabbit hole as much as I did! Until next time, Happy Coding!</p>
            </div>
        </div>
    )
}

export default February24