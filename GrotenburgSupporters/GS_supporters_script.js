const sponsors = ['Boels_Logo.gif','BZB_Logo.png','Dauner_Logo.jpg','Gehlings_Bausysteme_Logo.png','Hauser_Logo.png','Haushaltsauflösungen_Logo.png','Hendrichs_Logo.png','KFC_Logo.png','Lomme_Logo.png','Peschges_Logo.png','Stufffactory_Logo.jpg','Supporters Club Krefeld_Logo.png','TheaterKRMG_Logo.png','VoBaKrefeld_Logo.png'];
const main = document.querySelector('.main-container');


sponsors.forEach(sponsor => {
    main.innerHTML += `
    <div class="supporter">
      <img src="/GrotenburgSupporters/Logos/${sponsor}" alt="" />
    </div>
    `
})
