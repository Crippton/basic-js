function createDreamTeam(members) {
  let result = [];
  let temp = [];

  if (Array.isArray(members)) {


    members.forEach(element => {
      if (typeof (element) === 'string') {
        temp.push(element.trim().toLocaleUpperCase());
      } else {
        return false;
      }
    });
    temp = temp.sort();
    temp.forEach(element => {

      if ((typeof (element) === 'string') && (element.trim() !== '')) {
        //element.slice(1,element.length-1);
        result += element.trim().slice(0, 1).toLocaleUpperCase();
      } else {
        return false;
      }


    });
    console.log(result);
    return result;
  } else {
    return false;
  }
};
// createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']);
// createDreamTeam([
//   'Amelia',
//   'Grace',
//   'Lily',
//   'Ruby',
// ]);

// createDreamTeam([
//   '   William Alston ',
//   ' Paul Benacerraf',
//   '  Ross Cameron',
//   '       Gilles Deleuze',
//   '  Arda Denkel ',
//   '  Michael Devitt',
//   '  Kit Fine',
//   ' Nelson Goodman',
//   'David Kolb',
//   '   Saul Kripke',
//   '  Trenton Merricks',
//   '  Jay Rosenberg',
// ]);


createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]);