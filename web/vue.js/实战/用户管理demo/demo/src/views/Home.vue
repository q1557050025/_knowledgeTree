
<template>
  <div class="home container">
    <h1 class="page-header">用户管理系统</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data(){
    return {
      customers: []
    }
  },
  methods: {
    fetchCustomers() {
      this.$http.get("http://localhost:3000/users")
        .then(function(response) {
          // console.log(response)
          this.customers = response.body
        })
    }
  },
  created() {
    this.fetchCustomers();
  }
};
</script>
