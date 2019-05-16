<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <v-toolbar flat>
         <v-toolbar-title>회원가입</v-toolbar-title>
       </v-toolbar>
        <v-card>
          <div class="pa-3">
            <v-text-field
                v-model="email"
                label="이메일을 입력하세요"
                rule="[rules.email]"
            >
            </v-text-field>
            <v-text-field
                v-model="password"
                label="패스워드를 입력하세요"
                rule="[rules.password]"
                type="password"
            >
            </v-text-field>
            <v-text-field
              v-model="name"
              label="이름을 입력하세요"
            >
            </v-text-field>
            <v-text-field
              v-model="age"
              label="나이를 입력하세요"
            >
            </v-text-field>
            <v-btn
             large
             block
             color="primary"
             @click="signup"
            >회원가입</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      console.log(this.email, this.password)
      axios.post('http://localhost:3000/api/user/signup2', {
        email: this.email,
        password: this.password,
        name: this.name,
        age: this.age
        // user: 'postMan'
      })
        .then((r) => {
          // this.pop('사용자 등록 완료');
          console.log('사용자 등록 완료');
          this.email = ''
          this.password = ''
          this.name = ''
          this.age = ''
        })
        .catch((e) => {
          console.error(e.message)
        })
    }
  }
}

</script>
