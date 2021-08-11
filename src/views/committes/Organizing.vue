<template>
  <div style="width: 100%">
    <div class="back-img">
      <img :src="require('assets/images/committe/logo3.png')" alt="">
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
  name: "Organizing",
  data() {
    return {
      data:
      [
        [
          {
            title:'Organizing Committee Members',
            name:'Zehcun Hu',
            affi:'Tsinghua University',
            mail:'zechhu@tsinghua.edu.cn'
          },
          {
            title:'',
            name:'Tao Yu',
            affi:'South China University of Technology',
            mail:'taoyu1@scut.edu.cn'
          },
          {
            title:'',
            name:'Juan Yu',
            affi:'Chongqing University',
            mail:'yujuancqu@qq.com'
          },
          {
            title:'',
            name:'Hui Liu',
            affi:'Guangxi University',
            mail:'hughlh@126.com'
          },
          {
            title:'',
            name:'Zhenguo Shao',
            affi:'Fuzhou University',
            mail:'shao.zg@fzu.edu.cn'
          },
          {
            title:'',
            name:'Lei Xi',
            affi:'Three Gorges University',
            mail:'xilei2014@163.com'
          },
          {
            title:'Local Organizing Committee Members',
            name:'Qi Wang',
            affi:'Southeast University',
            mail:'wangqi@seu.edu.cn'
          },
          {
            title:'',
            name:'Yujian Ye',
            affi:'Southeast University',
            mail:'yeyujian@seu.edu.cn'
          },
          {
            title:'',
            name:'Lucheng Hong',
            affi:'Southeast University',
            mail:'hlc3061@seu.edu.cn'
          },
          {
            title:'',
            name:'Zhou Li',
            affi:'Southeast University',
            mail:'lizhou@seu.edu.cn'
          },
          {
            title:'',
            name:'Qinran Hu',
            affi:'Southeast University',
            mail:'qhu@seu.edu.cn'
          },
          {
            title:'',
            name:'Jiaxing Lei',
            affi:'Southeast University',
            mail:'jxlei@seu.edu.cn'
          },
          {
            title:'',
            name:'Zhi Wu',
            affi:'Southeast University',
            mail:'zwu@seu.edu.cn'
          },
        ],
        [
          {
            title:'',
            name:'Tao Jiang',
            affi:'Northeast Electric Power University',
            mail:'t.jiang@aliyun.com'
          },
          {
            title:'',
            name:'Xinyu Chen',
            affi:'Huazhong University of Science and Technology',
            mail:'xchen2019@hust.edu.cn'
          },
          {
            title:'',
            name:'Zongxiang Lu',
            affi:'Tsinghua University',
            mail:'luzongxiang98@tsinghua.edu.cn'
          },
          {
            title:'',
            name:'Mingyao Ma',
            affi:'Hefei University of Technology',
            mail:'miyama@hfut.edu.cn'
          },
          {
            title:'',
            name:'Yanli Liu',
            affi:'Tianjin University',
            mail:'yanliliu@tju.edu.cn'
          },
          {
            title:'',
            name:'Gengfeng Li',
            affi:'Xi’an Jiaotong University',
            mail:'gengfengli@xjtu.edu.cn'
          },
          {
            title:'',
            name:'Yifei Wang',
            affi:'Southeast University',
            mail:'wyf@seu.edu.cn'
          },
          {
            title:'',
            name:'Xi Wu',
            affi:'Southeast University',
            mail:'wuxi@seu.edu.cn'
          },
          {
            title:'',
            name:'Yueming Wang',
            affi:'Southeast University',
            mail:'yuemingwang120@qq.com'
          },
          {
            title:'',
            name:'Huan Long',
            affi:'Southeast University',
            mail:'hlong@seu.edu.cn'
          },
          {
            title:'',
            name:'Tao Chen',
            affi:'Southeast University',
            mail:'101012673@seu.edu.cn'
          },
          {
            title:'',
            name:'Haiwei Cai',
            affi:'Southeast University',
            mail:'haiweicai@seu.edu.cn'
          },
          {
            title:'',
            name:'Lei Huang',
            affi:'Southeast University',
            mail:'huanglei@seu.edu.cn'
          },
        ],
        [
          {
            title:'',
            name:'Yin Xu',
            affi:'Beijing Jiaotong University',
            mail:'xuyin@bjtu.edu.cn'
          },
          {
            title:'',
            name:'Chuan He',
            affi:'Sichuan University',
            mail:'he_chuan@scu.edu.cn'
          },
          {
            title:'',
            name:'Hua Ye',
            affi:'Shandong University',
            mail:'yehua@email.sdu.edu.cn'
          },
          {
            title:'',
            name:'Zewen Li',
            affi:'Changsha University of Science and Technology',
            mail:'lzw0917@163.com'
          },
          {
            title:'',
            name:'Gang Lv',
            affi:'Beijing Jiaotong University',
            mail:'ganglv@bjtu.edu.cn'
          },
          {
            title:'',
            name:'Xiaofeng Ding',
            affi:'BeiHang University',
            mail:'dingxiaofeng@buaa.edu.cn'
          },
          {
            title:'',
            name:'Zhongze Wu',
            affi:'Southeast University',
            mail:'zzwu@seu.edu.cn'
          },
          {
            title:'',
            name:'Suyang Zhou',
            affi:'Southeast University',
            mail:'suyang.zhou@seu.edu.cn'
          },
          {
            title:'',
            name:'Xiaohui Qu',
            affi:'Southeast University',
            mail:'xhqu@seu.edu.cn'
          },
          {
            title:'',
            name:'Meng Song',
            affi:'Southeast University',
            mail:'msong_seu@seu.edu.cn'
          },
          {
            title:'',
            name:'Fei Zhang',
            affi:'Southeast University',
            mail:'zhangfei@seu.edu.cn'
          },
          {
            title:'',
            name:'Xiangjun Quan\t',
            affi:'Southeast University',
            mail:'xquan@seu.edu.cn'
          },
          {
            title:'',
            name:'Hao Ming',
            affi:'Southeast University',
            mail:'haoming@seu.edu.cn '
          },
        ],
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/styles/committees";

</style>
