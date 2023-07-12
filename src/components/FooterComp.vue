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
    /* background-color:#D17F1F; */
    background-color: #16A641;
}

.logomaje {
    height: 8rem;
    width: 8rem;
    margin-top: 5rem;
    margin-bottom: 3rem;
margin-left: auto;
margin-right: auto;

}



</style>




