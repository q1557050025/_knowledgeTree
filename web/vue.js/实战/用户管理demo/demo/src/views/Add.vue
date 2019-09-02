<template>
  <div class="container">
    <h1 class="page-header">添加用户</h1>
    <form @submit="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label>教育背景</label>
          <input type="text" class="form-control" placeholder="education" v-model="customer.education">
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="graduationSchool" v-model="customer.graduationSchool">
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="customer.profession">
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <textarea name="profile" id="" cols="10" rows="10" class="form-control" v-model="customer.profile"></textarea>
        </div>
      </div>

      <button class="btn btn-primary" type="submit">添加</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {}
    }
  },
  methods: {
    addCustomer(e) {
      let customer = {
        name: this.customer.name,
        phone: this.customer.phone,
        email: this.customer.email,
        education: this.customer.education,
        graduationSchool: this.customer.graduationSchool,
        profession: this.customer.profession,
        profile: this.customer.profile,
      }
      this.$http.post("http://localhost:3000/users", customer)
        .then(function(response){
          this.$router.push({path:"/"})
        })
      e.preventDefault()
    }
  }
}
</script>