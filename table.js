const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const log = console.log.bind(console);
let html = '';
let players = [];

// Football Superbowl Squares
const player = {
 id: 0,
 paid: false,
 player: 'Player Name',
 displayName: 'Display Name',
 email: '',
 phone: '',
 totalSquares: 0,
 squares: [],
 edit: `
 <button class="btn edit" type="button">
  <i class="fas fa-edit"></i>
  </button>`,
 delete: `
 <button class="btn trash" type="button">
  <i class="fa fa-trash"></i>
  </button>`,
 display: function () {
  html += `
  <tr>
   <td>${this.id}</td>
  <td>${this.paid}</td>
  <td>${this.player}</td>
  <td>${this.displayName}</td>
  <td>${this.email}</td>
  <td>${this.phone}</td>
  <td>${this.totalSquares}</td>
  <td>${this.squares}</td>
  <td>${this.edit}</td>
  <td>${this.delete}</td>
  </tr>`;
  return html;
 }
};

$('#gamePlayers').innerHTML = `
<div class="container">
   <div class="col">
    <h3>Add Player</h3>
    <button id="addPlayer" class="btn btn-sm" type="button"><i class="fas fa-plus"></i></button>
   </div>
   <table class="table table-bordered table-striped table-hover">
    <thead>
     <tr>
      <th>ID</th>
      <th>Paid</th>
      <th>Player</th>
      <th>Display Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Total Squares</th>
      <th>Squares</th>
      <th>Edit</th>
      <th>Delete</th>
     </tr>
    </thead>
    <tbody id="playersTable">
    </tbody>
   </table>
 
</div>
`;

/*
$('#playersTable').innerHTML = player.display();
*/

const playerForm = {
 id: player.length + 1,
 paid: `<div class="form-group"><label for="paid">Paid</label>
 <input type="checkbox" id="paid" name="paid" value="paid"></div>`,
 player: `<div class="form-group"><label for="player">Player</label>
 <input type="text" id="player" name="player" value=""></div>`,
 displayName: `<div class="form-group"><label for="displayName">Display Name</label>
 <input type="text" id="displayName" name="displayName" value=""></div>`,
 email: `<div class="form-group"><label for="email">Email</label>
 <input type="email" id="email" name="email" value=""></div>`,
 phone: `<div class="form-group"><label for="phone">Phone</label>
 <input type="tel" id="phone" name="phone" value=""></div>`,
 squares: `<div class="form-group"><label for="squares">Squares</label>
 <input type="text" id="squares" name="squares" value=""></div>`,
 totalSquares: `<div class="form-group"><label for="totalSquares">Total Squares</label>
 <input type="number" id="totalSquares" name="totalSquares" value=""></div>`,
 submit: `<button class="btn btn-sm" type="submit">Submit</button>`,
 display: function () {
  html = `
  <form id="playerForm">
  <h3>Add Player</h3>
  ${this.paid}
  ${this.player}
  ${this.displayName}
  ${this.email}
  ${this.phone}
  ${this.squares}
  ${this.totalSquares}
  ${this.submit}
  </form>`;
  return html;
 }
};

/*
 $('#addPlayer').addEventListener('click', () => {
  $('#playerForm').innerHTML = playerForm.display();
 }
 );
 
 

 $('#playerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const paid = $('#paid').value;
  const player = $('#player').value;
  const displayName = $('#displayName').value;
  const email = $('#email').value;
  const phone = $('#phone').value;
  const squares = $('#squares').value;
  const totalSquares = $('#totalSquares').value;
  players.push({
   id: players.length + 1,
   paid: paid,
   player: player,
   displayName: displayName,
   email: email,
   phone: phone,
   squares: squares,
   totalSquares: totalSquares
  });
  $('#playersTable').innerHTML = player.display();
  $('#playerForm').innerHTML = '';
 })
 */





