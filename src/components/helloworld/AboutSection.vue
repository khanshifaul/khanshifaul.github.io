<template>
    <section id="About" class="about container-xl">
        <div>
            <h2 class="section-title border-bottom">About Myself</h2>
            <div class="about-text">
                <p>
                    I am very passionate about computer technology. So I started learning
                    about this magic box myself. To gain more knowledge, I enrolled myself
                    in a Diploma Engineering program. Since then I have learned and
                    mastered many computer-related technologies. I want to build my career
                    in this field. My future goal is to complete my graduation in computer
                    science.
                </p>
                <p>
                    Along with studying, I have worked as a computer operator in various
                    institutions. From my workplace I gained experience and became an
                    expert at Microsoft Office Applications (Word, Excel, powerpoint),
                    Adobe Photoshop & Illustrator. On my own initiative, I learned
                    front-end web development (HTML, CSS, JavaScript), and various
                    programming language (Python, C, C++, C#).
                </p>
            </div>

            <div class="timeline">
                <p>
                    2015 <br />
                    🎓Graduated from Secondary School and enrolled on Higher Secondary.
                </p>
                <p>
                    2016 <br />
                    Drop out from Higher Secondary & focused on my passion about computer.
                </p>
                <p>
                    2017 <br />
                    Started a part-time job as a computer operator (spammer🙊).
                </p>
                <p>
                    2018 <br />
                    Quit previous job & started descent one this time🥳.
                </p>
                <p>
                    2019 <br />
                    💼+📚 Enrolled on Diploma in Engineering alongside job.
                </p>
                <p>
                    2020 <br />
                    Tried hardly to survive the Corona Pandemic and Survived 😎.
                </p>
                <p>
                    2021 <br />
                    Started another job though due to Corona Pandemic it didn't last longer.
                </p>
                <p>
                    2022 <br />
                    Another new job as a computer operator and still continuing.
                </p>
                <p>
                    2023 <br />
                    Probablily Graduation Diploma with a great CGPA 😎
                </p>
                <p>
                    2024 <br />
                    Oviously have some plan for this year. Let the time come.
                </p>
            </div>
        </div>
        <div class="container-fluid d-flex flex-wrap justify-content-center">
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/word.svg" alt="Word" title="Word"/>
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/excel.svg" alt="Excel" title="Excel"/>
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/powerpoint.svg" alt="Powerpoint" title="Powerpoint" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/access.svg" alt="Access" title="Access" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/tex.svg" alt="LaTeX" title="LaTeX" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/photoshop.svg" alt="Photoshop" title="Photoshop" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/illustrator.svg" alt="Illustrator" title="Illustrator" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/html.svg" alt="HTML" title="HTML" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/css.svg" alt="CSS" title="CSS" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/scss.svg" alt="SCSS" title="SCSS" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/tailwind.svg" alt="Tailwind CSS" title="Tailwind CSS" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/javascript.svg" alt="JavaScript" title="JavaScript" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/pgsql.svg" alt="Postgresql" title="PostgreSQL" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/reactjs.svg" alt="ReactJS" title="ReactJS" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/vue.svg" alt="VueJS" title="VueJS" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/vite.svg" alt="Vite" title="Vite" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/nuxt.svg" alt="NuxtJS" title="NuxtJS" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/firebase.svg" alt="Firebase" title="Firebase" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/python.svg" alt="Python" title="Python" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/c.svg" alt="C" title="C" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/cpp.svg" alt="C++" title="C++" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/csharp.svg" alt="C#" title="C#" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/go.svg" alt="Go" title="Go" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/django.svg" alt="DJango" title="DJango" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/wasm.svg" alt="WebAssembly" title="WebAssembly" />
            <img class="img-fluid p-2" width="75" height="75" src="/src/assets/icons/qml.svg" alt="Qt" title="QT" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.about-text {
    font-weight: 400;
    text-align: justify;
}

.svg {
    img {
        width: 100px;
        height: auto;
    }
}

div {
    &.timeline {
        width: 20rem;
        margin: 5rem auto;
        text-align: justify;
    }
}

.timeline {
    p {
        border-top: .01rem dashed;
        border-bottom: .01rem dashed;
        border-color: blue !important;
        margin: 0;
        padding: 2rem;
        counter-increment: section;
        position: relative;

        &:nth-child(even):before {
            content: counter(section);
            right: 100%;
            margin-right: -1.5rem;
            position: absolute;
            border-radius: 50%;
            padding: 1rem;
            height: 3rem;
            width: 3rem;
            background-color: blue;
            text-align: center;
            color: #fff;
            font-size: 100%;
        }

        &:nth-child(odd):before {
            content: counter(section);
            left: 100%;
            margin-left: -1.5rem;
            position: absolute;
            border-radius: 50%;
            padding: 1rem;
            height: 3rem;
            width: 3rem;
            background-color: blue;
            text-align: center;
            color: #fff;
            font-size: 100%;
        }

        &:nth-child(even) {
            border-left: .2rem dashed;
            border-top-left-radius: 2.5rem;
            border-bottom-left-radius: 2.5rem;
            margin-right: 2.5rem;
            padding-right: 0;
        }

        &:nth-child(odd) {
            border-right: .2rem dashed;
            border-top-right-radius: 2.5rem;
            border-bottom-right-radius: 2.5rem;
            margin-left: 2.5rem;
            padding-left: 0;
        }

        &:first-child {
            border-top: 0;
            border-top-right-radius: 0;
            border-top-left-radius: 0;
        }

        &:last-child {
            border-bottom: 0;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
}
</style>