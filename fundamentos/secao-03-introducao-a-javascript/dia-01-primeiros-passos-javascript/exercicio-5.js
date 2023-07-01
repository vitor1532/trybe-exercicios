let piece = 'QUEEN';

switch (piece.toLocaleLowerCase()) {
  case 'pawn':
    console.log('pawns can move 1 or 2 spaces ahead or take out a enemy piece 1 space of any diagonal');
    break;
  case 'bishop':
    console.log('bishops can move any number of spaces diagonally');
    break;
  case 'knight':
    console.log('knights can only move in a L shape');
    break;
  case 'rooks':
    console.log('rooks can move any number of spaces except diagonally');
    break;
  case 'queen':
    console.log('queens can move any number of spaces in any direction');
    break;
  case 'king':
    console.log('kings can move only one space in any direction');
    break;    
  default:
    console.log('error - piece invalid');
    break;
}