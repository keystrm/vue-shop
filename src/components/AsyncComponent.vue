<template>
    <div>
        <h1>Large User List</h1>
        <div class="user-list">
            <div v-for="user in users" :key="user.id" class="user-item">
                <h2>{{ user.name }}</h2>
                <p>Email: {{ user.email }}</p>
                <p>Username: {{ user.username }}</p>
                <p>Address: {{ user.address.street }}, {{ user.address.city }}</p>
                <p>Phone: {{ user.phone }}</p>
                <p>Website: {{ user.website }}</p>
                <p>Company: {{ user.company.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const users = ref<Array<User>>([])

const generateUsers = (numberOfUsers: number) => {
    const users = [];

    for (let i = 0; i < numberOfUsers; i++) {
        users.push({
            id: i,
            name: `User ${i}`,
            username: `user${i}`,
            email: `user${i}@example.com`,
            address: {
                street: `Street ${i}`,
                suite: `Suite ${i}`,
                city: `City ${i}`,
                zipcode: `${10000 + i}`,
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: `${1000000000 + i}`,
            website: `www.user${i}.com`,
            company: {
                name: `Company ${i}`,
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        });
    }

    return users;
}


onMounted(()=>{
    users.value = generateUsers(1000)
})

</script>

<style scoped>
.user-list {
    display: flex;
    flex-wrap: wrap;
}

.user-item {
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}
</style>