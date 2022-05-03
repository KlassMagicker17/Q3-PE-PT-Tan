addEventListener('load', () => {
    const skillList = document.getElementById('skill_list');
    const skillDesc = document.getElementById('skill_description');

    console.log(skillDesc);
    for (let i = 0; i < skillList.children.length; i++) {
        const e = skillList.children[i];
        e.addEventListener('click', () => {
            for (let j = 0; j < skillList.children.length; j++) {
                skillList.children[j].classList.remove('selected')
            }
            for (let l = 0; l < skillDesc.children.length; l++) {
                console.log(skillDesc.children[l].classList.add('hidden'));
            }
            skillDesc.children[i].classList.remove('hidden');
            skillList.children[i].classList.add('selected');
        })
    }
})