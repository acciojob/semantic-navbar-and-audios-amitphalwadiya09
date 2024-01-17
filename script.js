//your code here
it("should display 3 random audios", () => {
  cy.contains('3 random audios');

  cy.get('audio').should('have.length', 3).each(($audio, index) => {
    cy.wrap($audio).should('have.attr', 'controls');

    cy.wrap($audio).invoke('attr', 'src').should('eq', [
      'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
      'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
      'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
    ][index]);
  });
});