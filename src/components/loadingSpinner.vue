<template>
    <div class="loading">
        <div class="breeding-rhombus-spinner">
            <div class="rhombus child-1"></div>
            <div class="rhombus child-2"></div>
            <div class="rhombus child-3"></div>
            <div class="rhombus child-4"></div>
            <div class="rhombus child-5"></div>
            <div class="rhombus child-6"></div>
            <div class="rhombus child-7"></div>
            <div class="rhombus child-8"></div>
            <div class="rhombus big"></div>
        </div>
        <h2 class="brand neon">KhanShifaul</h2>
    </div>
</template>

<script>
export default {
    data() {
        return { arr: ["....."] };
    },
};
</script>

<style lang="scss" scoped>
.breeding-rhombus-spinner {
    height: 65px;
    width: 65px;
    position: relative;
    transform: rotate(45deg);
}

.breeding-rhombus-spinner,
.breeding-rhombus-spinner * {
    box-sizing: border-box;
}

.breeding-rhombus-spinner .rhombus {
    height: calc(65px / 7.5);
    width: calc(65px / 7.5);
    animation-duration: 2000ms;
    top: calc(65px / 2.3077);
    left: calc(65px / 2.3077);
    background-color: #3973c5;
    position: absolute;
    animation-iteration-count: infinite;
}

.breeding-rhombus-spinner .rhombus:nth-child(2n+0) {
    margin-right: 0;
}

.breeding-rhombus-spinner .rhombus.child-1 {
    animation-name: breeding-rhombus-spinner-animation-child-1;
    animation-delay: calc(100ms * 1);
    background-color: #224678;
}

.breeding-rhombus-spinner .rhombus.child-2 {
    animation-name: breeding-rhombus-spinner-animation-child-2;
    animation-delay: calc(100ms * 2);
    background-color: #ea4146;
}

.breeding-rhombus-spinner .rhombus.child-3 {
    animation-name: breeding-rhombus-spinner-animation-child-3;
    animation-delay: calc(100ms * 3);
    background-color: #2c5c9e;
}

.breeding-rhombus-spinner .rhombus.child-4 {
    animation-name: breeding-rhombus-spinner-animation-child-4;
    animation-delay: calc(100ms * 4);
    background-color: #ea4146;
}

.breeding-rhombus-spinner .rhombus.child-5 {
    animation-name: breeding-rhombus-spinner-animation-child-5;
    animation-delay: calc(100ms * 5);
    background-color: #2c5c9e;
}

.breeding-rhombus-spinner .rhombus.child-6 {
    animation-name: breeding-rhombus-spinner-animation-child-6;
    animation-delay: calc(100ms * 6);
    background-color: #ea4146;
}

.breeding-rhombus-spinner .rhombus.child-7 {
    animation-name: breeding-rhombus-spinner-animation-child-7;
    animation-delay: calc(100ms * 7);
    background-color: #2c5c9e;
}

.breeding-rhombus-spinner .rhombus.child-8 {
    animation-name: breeding-rhombus-spinner-animation-child-8;
    animation-delay: calc(100ms * 8);
    background-color: #ea4146;
}

.breeding-rhombus-spinner .rhombus.big {
    height: calc(65px / 3);
    width: calc(65px / 3);
    animation-duration: 200ms;
    top: calc(65px / 3);
    left: calc(65px / 3);
    background-color: #3973c5;
    animation: breeding-rhombus-spinner-animation-child-big 2s infinite;
    animation-delay: 0.5s;
}


@keyframes breeding-rhombus-spinner-animation-child-1 {
    50% {
        transform: translate(-325%, -325%);
    }
}

@keyframes breeding-rhombus-spinner-animation-child-2 {
    50% {
        transform: translate(0, -325%);
    }
}

@keyframes breeding-rhombus-spinner-animation-child-3 {
    50% {
        transform: translate(325%, -325%);
    }
}

@keyframes breeding-rhombus-spinner-animation-child-4 {
    50% {
        transform: translate(325%, 0);
    }
}

@keyframes breeding-rhombus-spinner-animation-child-5 {
    50% {
        transform: translate(325%, 325%);
    }
}

@keyframes breeding-rhombus-spinner-animation-child-6 {
    50% {
        transform: translate(0, 325%);
    }
}

@keyframes breeding-rhombus-spinner-animation-child-7 {
    50% {
        transform: translate(-325%, 325%);
    }
}

@keyframes breeding-rhombus-spinner-animation-child-8 {
    50% {
        transform: translate(-325%, 0);
    }
}

@keyframes breeding-rhombus-spinner-animation-child-big {
    10% {
        background-color: #6610f2;
    }

    50% {
        transform: scale(0.5);
        background-color: #ea4146;
    }

    90% {
        background-color: #6610f2;
    }
}

.loading {
    height: 100vh;
    background: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.brand {
    color: #183153;
    font-weight: 800;
    font-family: 'Quick Starter', sans-serif;
    padding: 2rem;
}
</style>