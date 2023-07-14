<template>
    <footer>
        <section class="footer--boxup">
            <div class="boxup--left">
                <img class="logopenascal" src="../assets/peñascal.png" alt="Peñascal logo">
                <p class="desarrollamos">Desarrollamos programas para mejorar la empleabilidad.</p>
            </div>
            <div class="boxup--center">
                <h3 class="contacto">Contacto</h3>
                <div boxup--center--p>
                <p>C/ Ctra. Bilbao-Galdakao, 10
                    48004 BILBAO</p>
                <p>Tel.: +34 944 029 300 </p> 
                <p>Fax.: 944 029 303</p>
                <p>Email: info@grupopenascal.com</p>   
                <p>Web: www.grupopenascal.com</p> 
                </div>                 
            </div>
            <div class="boxup--right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1883084902183!2d-2.909483225210002!3d43.24747507857947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4fa9723128c7%3A0xbc3542d2f3c75723!2sPe%C3%B1ascal%20Kooperatiba!5e0!3m2!1ses!2ses!4v1689324994624!5m2!1ses!2ses" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>       </div>

        </section>
        <section class="footer--boxdown">
            <img class="logomaje" src="../assets/logomajeMayBati.png" alt="MAJE logo">
            <p class="aviso-legal">
                Aviso legal | Términos legales
            </p>       
        </section>



    </footer>    
</template>
<style scoped>
section{display: flex;}
.logopenascal{
    margin: 2rem;
}
.footer--boxup {
    display: flex;
    /* background-color:rgb(191, 237, 232); */
    /* background-color:#EFE9E7; */
    background-color: #D8C3A5;
    justify-content: space-around;
    margin: 1rem;
    gap: 1rem;
}
.boxup--left  {
    /* margin: auto; */
    /* max-width: 25%; */
    width: 33%;

    align-items: center;
    text-align: center;
}
.contacto {
    text-decoration: underline;
}
.boxup--center {
    background-color: #EFE9E7;
    width: 33%;
    text-align: center;
    align-items: center;
    width: max-content;
    margin-right: 0;

}
.boxup--center--p{
}
.boxup--right {
    width: 33%;

}

.desarrollamos{
    margin: auto;
} 
aviso-legal{
    align-items: center;
}
.footer--boxdown {

    display: flex;
    flex-direction: column;
    /* max-width: fit-; */
    /* background-color:#D17F1F; */
    /* background-color: rgb(176, 239, 231); */
    /* background-color: #D8C3A5; */
    background-color:#EFE9E7;
}

.logomaje {
    height: 8rem;
    width: 8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
margin-left: auto;
margin-right: auto;

}
@media only screen and (max-width: 800px) {
    .footer--boxup {
        display: flex;
        /* margin-top: 5rem;
        margin-bottom: 3rem; */
        margin: 0;
        padding-bottom: 1rem;
        /* max-width: fit-content;
        max-height: fit-content; */
        flex-direction: column;
        background-color: rgb(191, 237, 232);
    }
    .logomaje {
    height: 8rem;
    width: 8rem;
    margin-top: 1rem;
    margin-bottom: 0.6rem;
    margin-left: auto;
    margin-right: auto;

}
}



</style>




