<template>
  <div style="width: 100%">
    <div class="back-img">
      <img :src="require('assets/images/committe/logo1.png')" alt="">
    </div>

    <div class="text-zone">
      <el-row>
        <el-col :md="8" :sm="12" v-for="colData in data">
          <div class="info-card" v-for="item in colData">
            <div class="title">{{item.title}}</div>
            <div>{{item.name}}</div>
            <div>{{item.affi}}</div>
            <a :href="'mainto:'+item.mail" class="main">{{item.mail}}</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steering",
  data() {
    return {
      data:
          [
            [
              {
                title: 'General Chair',
                name: 'Yinbiao Shu',
                affi: 'China Huaneng Group Co., Ltd.',
                mail: 'yinbiaoshu@sgcc.com.cn'
              },
              {
                title: '',
                name: 'Frank C. Lambert',
                affi: 'Georgia Institute of Technology',
                mail: 'frank.lambert@neetrac.gatech.edu'
              },
              {
                title: '',
                name: 'Guangjun Zhang',
                affi: 'Southeast University',
                mail: 'gjzhang@buaa.edu.cn'
              },
            ],
            [
              {
                title: 'Vice Chair',
                name: 'Shujun Lu',
                affi: 'State Grid Corporation of China',
                mail: 'shujun-lu@sgcc.com.cn'
              },
              {
                title: '',
                name: 'Xiaoxin Zhou',
                affi: 'China Electric Power Research Institute',
                mail: 'xxzhou@epri.sgcc.com.cn'
              },
              {
                title: 'Members',
                name: 'Mohammad Shahidehpour',
                affi: 'Illinois Institute of Technology',
                mail: 'ms@iit.edu'
              },
              {
                title: '',
                name: 'Yulong Ding',
                affi: 'University of Birmingham',
                mail: 'ylding@home.ipe.ac.cn'
              },
            ],
            [
              {
                title: '',
                name: 'Jianbo Guo',
                affi: 'China Electric Power Research Institute',
                mail: 'guojb@epri.sgcc.com.cn'
              },
              {
                title: '',
                name: 'Saifur Rahman',
                affi: 'Integral University',
                mail: 'rehman.saifur@gmail.com'
              },
              {
                title: '',
                name: 'Zi-Qiang Zhu',
                affi: 'The University of Sheffield',
                mail: 'z.q.zhu@sheffield.ac.uk'
              },
              {
                title: '',
                name: 'Goran Strbac',
                affi: 'Imperial College London',
                mail: 'g.strbac@imperia1.ac.uk'
              },
            ]
          ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/styles/committees";
</style>
