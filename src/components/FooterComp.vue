<template>
    <footer>
        <section class="footer--boxup">
            <img class="logopenascal" src="../assets/peñascal.png" alt="Peñascal logo">
            <p class="desarrollamos">Desarrollamos programas para mejorar la empleabilidad.</p>

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
    background-color:#5BEC86;

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
    background-color: rgb(176, 239, 231);
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




