<script setup>
import { onMounted } from 'vue';
import { useInboxStore } from '@/stores/inbox.store';
const inboxStore = useInboxStore()

onMounted(() => {
    inboxStore.readMsg()
})
</script>

<template>
    <section class="container-fluid">
        <h1 class="page-title">Inbox</h1>
        <div class="inbox">
            <div class="inbox-head">
                <div>From</div>
                <div>Subject</div>
                <div>Datetime</div>
            </div>
            <div class="inbox-body">
                <div class="msg-card" v-for="webmail in inboxStore.webmails">
                    <div>
                        <p>{{webmail.from}}</p>
                        <p>{{webmail.email}}</p>
                    </div>
                    <div>{{webmail.subject}}</div>
                    <div>Datetime</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.page-title {
    border-bottom: 1px solid var(--color-border);
}

.inbox {
    background-color: #fff;
    padding: .1rem;
    border: 1px solid var(--color-border);
    border-radius: .25rem;

    .inbox-head,
    .inbox-body>.msg-card {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr auto;
        border-bottom: 1px solid var(--color-border);

        &:last-child {
            border-color: transparent;
        }

        div {
            background-color: #fafafa;
            padding: 0 1rem;

            p {
                margin: 0;
            }

            &:last-child {
                text-align: right;
            }
        }

    }

    .inbox-head div {
        line-height: 2rem;
        font-weight: bolder;
    }
}
</style>