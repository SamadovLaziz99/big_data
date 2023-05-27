<template>
  <div>
    <h1 class="text-center">Mavzular:</h1>
    <div style="margin: 0 auto; width: 60%">
      <ul v-for="item in items" :key="item.id">
        <li style="list-style: none; cursor: pointer" @click="openPdf(item.id)">
          <a-card>{{ item.title }}</a-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Mavzu 1",
          id: 1
        },
        {
          title: "Mavzu 2",
          id: 2
        },
        {
          title: "Mavzu 3",
          id: 3
        },
        {
          title: "Mavzu 4",
          id: 4
        },
        {
          title: "Mavzu 5",
          id: 5
        },
        {
          title: "Mavzu 6",
          id: 6
        },
        {
          title: "Mavzu 7",
          id: 7
        },
        {
          title: "Mavzu 8",
          id: 8
        },
        {
          title: "Mavzu 9",
          id: 9
        },
        {
          title: "Mavzu 10",
          id: 10
        },
        {
          title: "Mavzu 11",
          id: 11
        },
        {
          title: "Mavzu 12",
          id: 12
        }
      ]
    }
  },
  methods: {
    openPdf(id) {
      this.$router.push({name: "items", query: {id: id}});
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
