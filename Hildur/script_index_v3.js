function changeLangEng(){
    document.getElementById("meðferðLang").text = "Therapy";
    document.getElementById("meðferðLang").setAttribute("href", "index_en_v3.html");
    document.getElementById("meðferðHjáMérLang").text = "Therapy with Me";
    document.getElementById("meðferðHjáMérLang").setAttribute("href", "https://salmedferd.is/?page_id=229");
    document.getElementById("fjarmeðferðLang").text = "Online Therapy";
    document.getElementById("fjarmeðferðLang").setAttribute("href", "https://salmedferd.is/?page_id=3415");
    document.getElementById("sjálfsvinnaLang").text = "Self-Care";
    document.getElementById("sjálfsvinnaLang").setAttribute("href", "https://salmedferd.is/?page_id=231");
    document.getElementById("fræðslaLang").text = "Resources";
    document.getElementById("fræðslaLang").setAttribute("href", "https://salmedferd.is/?page_id=2215");
    document.getElementById("umMigLang").text = "About Me";
    document.getElementById("umMigLang").setAttribute("href", "https://salmedferd.is/?page_id=193");
    document.querySelector('#eng').classList.add('active');
    document.querySelector('#isl').classList.remove('active');
    if (window.screen.width < 501){
        document.querySelector('.container').style.width = "100%";    
    }
}

function changeLangIsl(){
    document.getElementById("meðferðLang").text = "Meðferð";
    document.getElementById("meðferðLang").setAttribute("href", "index_is_v3.html");
    document.getElementById("meðferðHjáMérLang").text = "Meðferð hjá mér";
    document.getElementById("meðferðHjáMérLang").setAttribute("href", "https://salmedferd.is/?page_id=4");
    document.getElementById("fjarmeðferðLang").text = "Fjarmeðferð";
    document.getElementById("fjarmeðferðLang").setAttribute("href", "https://salmedferd.is/?page_id=3375");
    document.getElementById("sjálfsvinnaLang").text = "Sjálfsvinna";
    document.getElementById("sjálfsvinnaLang").setAttribute("href", "https://salmedferd.is/?page_id=1929");
    document.getElementById("fræðslaLang").text = "Fræðsla";
    document.getElementById("fræðslaLang").setAttribute("href", "https://salmedferd.is/?page_id=1182");
    document.getElementById("umMigLang").text = "Um mig";
    document.getElementById("umMigLang").setAttribute("href", "https://salmedferd.is/?page_id=13");
    document.querySelector('#eng').classList.remove('active');
    document.querySelector('#isl').classList.add('active');
    if (window.screen.width < 501){
        document.querySelector('.container').style.width = "100%";    
    }
}

function closeNav() {
    document.querySelector('.container').style.width = "0";
}