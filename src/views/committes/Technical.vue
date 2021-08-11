<template>
  <div style="width: 100%">
    <div class="back-img">
      <img :src="require('assets/images/committe/logo2.png')" alt="">
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
  name: "Technical",
  data(){
    return{
      data:[
          [
            {
              title:'General Chair',
              name:'Jianfeng Zhao',
              affi:'Southeast University',
              mail:'jianfeng_zhao@seu.edu.cn'
            },
            {
              title:'',
              name:'Chongqing Kang',
              affi:'Tsinghua University',
              mail:'cqkang@tsinghua.edu.cn'
            },
            {
              title:'Vice Chair',
              name:'Jinghan He',
              affi:'Beijing Jiaotong University',
              mail:'jhhe@bjtu.edu.cn'
            },
            {
              title:'',
              name:'Kaigui Xie',
              affi:'Chongqing University',
              mail:'kaiguixie@vip.163.com'
            },
            {
              title:'',
              name:'Xuzhu Dong',
              affi:'Wuhan University',
              mail:'rdong3@yahoo.com'
            },
            {
              title:'',
              name:'Zhiwei Wang',
              affi:'State Grid Jiangsu Electric Power Co., Ltd.',
              mail:'zhiwei.wang@geirina.net'
            },
            {
              title:'',
              name:'Wencong Su',
              affi:'University of Michigan-Dearborn',
              mail:'wencong@umich.edu'
            },
            {
              title:'',
              name:'Qi Huang',
              affi:'University of Electronic Science and Technology',
              mail:'hwong@uestc.edu.cn'
            },
            {
              title:'',
              name:'Dong Liu',
              affi:'Shanghai Jiaotong University',
              mail:'dongliu@sjtu.edu.cn'
            },
            {
              title:'',
              name:'Ming Ni',
              affi:'NARI Technology Co. Ltd',
              mail:'ni-ming@sgepri.sgcc.com.cn'
            },
            {
              title:'',
              name:'Qixin Chen',
              affi:'Tsinghua University',
              mail:'qxchen@tsinghua.edu.cn'
            },
            {
              title:'',
              name:'Nian Liu',
              affi:'North China Electric Power University',
              mail:'nianliu@ncepu.edu.cn'
            },
            {
              title:'',
              name:'Qiuwei Wu',
              affi:'Technical University of Denmark',
              mail:'qw@elektro.dtu.dk'
            },
          ],
          [
            {
              title:'',
              name:'Tianshu Bi',
              affi:'North China Electric Power University',
              mail:'tsbi@ncepu.edu.cn'
            },
            {
              title:'',
              name:'Fangxing Li',
              affi:'University of Tennessee',
              mail:'fli6@utk.edu'
            },
            {
              title:'',
              name:'Chuangxin Guo',
              affi:'Zhejiang University',
              mail:'guochuangxin@zju.edu.cn'
            },
            {
              title:'',
              name:'Hongjie Jia',
              affi:'Tianjin University',
              mail:'hjjia@tju.edu.cn'
            },
            {
              title:'',
              name:'Weisheng Wang',
              affi:'Hunan University',
              mail:'wwsh@hnu.edu.cn'
            },
            {
              title:'',
              name:'Zhengyou He',
              affi:'Southwest Jiaotong University',
              mail:'hezy@swjtu.edu.cn'
            },
            {
              title:'',
              name:'Xiaorong Xie',
              affi:'Tsinghua University',
              mail:'xiexr@tsinghua.edu.cn'
            },
            {
              title:'',
              name:'Huanhai Xin',
              affi:'Zhejiang University',
              mail:'xinhh@zju.edu.cn'
            },
            {
              title:'',
              name:'Yong Li',
              affi:'Hunan University',
              mail:'yongli@hnu.edu.cn'
            },
            {
              title:'',
              name:'Yi Ding',
              affi:'Zhejiang University',
              mail:'yiding@zju.edu.cn'
            },
            {
              title:'',
              name:'Wenhu Tang',
              affi:'South China University of Technology',
              mail:'wenhutang@scut.edu.cn'
            },
            {
              title:'',
              name:'Zuyi Li',
              affi:'Illinois Institute of Technology',
              mail:'lizu@iit.edu'
            },
            {
              title:'',
              name:'Lei Wu',
              affi:'Stevens Institute of Technology',
              mail:'lwu11@stevens.edu'
            },
            {
              title:'',
              name:'Zhaolong Sun',
              affi:'Naval University of Engineering',
              mail:'brucesunzl@126.com'
            },
          ],
          [
            {
              title:'',
              name:'Zuyi Li',
              affi:'Illinois Institute of Technology',
              mail:'lizu@iit.edu'
            },
            {
              title:'Members',
              name:'Feng Wu',
              affi:'Hohai University',
              mail:'wufeng@hhu.edu.cn'
            },
            {
              title:'',
              name:'Pertti Järventausta',
              affi:'Tampere University of Technology',
              mail:'pertti.jarventausta@tut.fi'
            },
            {
              title:'',
              name:'Ettore Bompard',
              affi:'Politecnico di Torino',
              mail:'ettore.bompard@polito.it'
            },
            {
              title:'',
              name:'Pierluigi Siano',
              affi:'University of Salerno',
              mail:'psiano@unisa.it'
            },
            {
              title:'',
              name:'Kang Li',
              affi:'University of Nottingham',
              mail:'Kang.li@nottinghua.ac.uk'
            },
            {
              title:'',
              name:'C.Y. Chung',
              affi:'University of Saskatchewan',
              mail:'c.y.chung@usask.ca'
            },
            {
              title:'',
              name:'Zhuoran Zhang',
              affi:'Nanjing University of Aeronautics and Astronautics',
              mail:'apsc-zzr@nuaa.edu.cn'
            },
            {
              title:'',
              name:'Guangtong Ma',
              affi:'Southwest Jiaotong University',
              mail:'gtma@swjtu.edu.cn'
            },
            {
              title:'',
              name:'Yixiang Shi',
              affi:'Tsinghua University',
              mail:'shyx@tsinghua.edu.cn'
            },
            {
              title:'',
              name:'Xinjing Zhang',
              affi:'Institute of Engineering Thermophysics',
              mail:'zhangxinjing@iet.cn'
            },
            {
              title:'',
              name:'Tao Wang',
              affi:'Zhejiang University',
              mail:'oatgnaw@zju.edu.cn'
            },
            {
              title:'',
              name:'Yong Fu',
              affi:'Mississippi State University',
              mail:'fu@ece.msstate.edu'
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
