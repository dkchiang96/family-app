class FamilyMember {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const familyMembers = [];

function submitFamilyMember() {
  const nameInput = document.getElementById('name');
  const ageInput = document.getElementById('age');
  const name = nameInput.value;
  const age = parseInt(ageInput.value);

  const familyMember = new FamilyMember(name, age);
  familyMembers.push(familyMember);
  reloadFamilyMembers();
}

function reloadFamilyMembers() {
  const familyList = document.getElementById('familyMembers').tBodies[0];
  familyList.innerHTML = '';

  for (const familyMember of familyMembers) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${familyMember.name}</td>
      <td>${familyMember.age}</td>
    `;
    familyList.appendChild(row);
  }
}
