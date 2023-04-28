let empty = "/src/image/5.png";
let icon_1 = "/src/image/icon-1.png";
let icon_1_1 = "/src/image/icon-1-1.png";
let icon_2 = "/src/image/icon-2.png";
let icon_2_2 = "/src/image/icon-2-2.png";
let icon_3 = "/src/image/icon-3.png";
let icon_3_3 = "/src/image/icon-3-3.png";
let icon_4 = "/src/image/icon-4.png";
let icon_4_4 = "/src/image/icon-4-4.png";
let icon_5 = "/src/image/icon-5.png";
let icon_5_5 = "/src/image/icon-5-5.png";
window.onload = function () {
    new Vue({
        el: '#app',
        data: function () {
            return {
                date: this.formatDates(),
                tab: [
                    {id: 1, title: "商城首页"},
                    {id: 2, title: "通知公告"},
                    {id: 3, title: "企业中心"},
                    {id: 4, title: "企业后台"},
                ],
                
                airconditionList: [
                    {
                        src: empty,
                        goodsName: "TCL新风空调1.5匹新一级变频冷暖60m³/h大新风量小蓝翼Ⅱ空调挂机",
                        price: this.MathRoadom(),
                        id:1,
                        specification: this.MathRoadom(),

                    },
                    {
                        src: empty,
                        title: "TCL新风空调1.5匹新一级变频冷暖60m³/h大新风量小蓝翼Ⅱ空调挂机",
                        goodsName: "TCL新风空调1.5匹新一级变频冷暖60m³/h大新风量小蓝翼Ⅱ空调挂机",
                        price: this.MathRoadom(),
                        id:2,
                        specification: this.MathRoadom(),
                    },
                    {
                        src: empty,
                        goodsName: "TCL新风空调1.5匹新一级变频冷暖60m³/h大新风量小蓝翼Ⅱ空调挂机",
                        price: this.MathRoadom(),
                        id:3,
                        specification: this.MathRoadom(),
                    },
                    {
                        src: empty,
                        goodsName: "TCL新风空调1.5匹新一级变频冷暖60m³/h大新风量小蓝翼Ⅱ空调挂机",
                        price: this.MathRoadom(),
                        id:4,
                        specification: this.MathRoadom(),
                    },
                    {
                        src: empty,
                        goodsName: "TCL新风空调1.5匹新一级变频冷暖60m³/h大新风量小蓝翼Ⅱ空调挂机",
                        price: this.MathRoadom(),
                        specification: this.MathRoadom(),
                        id:5,
                    },
                    {
                        src: empty,
                        goodsName: "TCL新风空调1.5匹新一级变频冷暖60m³/h大新风量小蓝翼Ⅱ空调挂机",
                        price: this.MathRoadom(),
                        specification: this.MathRoadom(),
                        id:6,
                    },
                ],

                userNo: '',
                userName: '',
                companyName: '',
                shoppingCarList:[],
                shoppingTotal:0,
                shoppingState:false,
                checkedShoppingCar:false,
                checkGoodCount:0,
                fit:['cover'],
            }
        },
        computed: {

        },
        mounted: function () {
            // this.getNoticeData();
            // this.getUserData();
            // this.getGoodsInfoData();
        },
        methods: {

            

            showMore: function(){
            },

            toNoticeDetail: function(id){
            },
            //打开购物车弹窗
            handleOpenShoppngCar(){
                this.shoppingState=true;
            },
            handleSelectionChange(e){
                console.log(e,1)
                if(e.length==this.shoppingCarList.length){
                    this.checkedShoppingCar=true;
                }else{
                    this.checkedShoppingCar=false;
                }
                this.shoppingCarSelectCount(e)
            },
            // 减少商品
            handleTotalSubtract(index){
                if( this.shoppingCarList[index].total<=1){
                    return;
                }else{
                    this.shoppingCarList[index].total--;

                }
                this.handleTotalCount();
            },
            // 增加商品数量
            handleTotalAdd(index){
                this.shoppingCarList[index].total++;
                this.handleTotalCount();
            },
            // 获取商品总数量
            handleTotalCount(){
                let num=0;
                this.shoppingCarList.forEach(item=>{
                    num+=item.total;
                })
                this.shoppingTotal=num;
                this.shoppingCarSelectCount(this.$refs.shoppingCar.selection);
            },
            // 商品数量输入框事件
            handleInput(e){
                let data = parseInt(this.shoppingCarList[e].total);

                if(data>0){
                    this.shoppingCarList[e].total=data;
                }else{
                    this.shoppingCarList[e].total=1;
                }

                this.handleTotalCount();
            },
            // 删除商品
            handleDelGoods(index){
                this.shoppingCarList.splice(index,1);
                this.handleTotalCount();
            },
            // 获取已选择的商品
            shoppingCarSelectCount(list){
                let count = 0;
                list.forEach(item=>{
                    count+=item.total;
                })
                this.checkGoodCount=count;
            },
            // 底部全选按钮商品切换事件
            changeSelect(){
                const row = this.$refs.shoppingCar.data
                row.forEach(row => {
                    this.$refs.shoppingCar.toggleAllSelection(row)
                });
            },
            // 已选商品删除事件
            handleDelGoodsSelect(e){
                let list = this.$refs.shoppingCar.selection;
                list.forEach(item=>{
                    this.shoppingCarList.forEach((items,index)=>{
                        if(item.id==items.id){
                            this.shoppingCarList.splice(index,1);
                        }
                    })
                });
                this.checkedShoppingCar=false;
            },
            // 已选择的商品进行付款
            handleGoToPay() {
                // 确定要付款的商品列表
                let list = this.$refs.shoppingCar.selection;
                if(list.length>0) {
                    localStorage.setItem('goodsObj', JSON.stringify(list));
                    location.href = '/html/home/index.html';
                }else{
                    window.top.popupWarningMessage('请选择一条记录');
                }
            },
            toPurchase: function(obj){
                    obj.total=1;
                    let data = JSON.parse(JSON.stringify(obj))
                    if (this.shoppingCarList.length > 0) {
                        let item = this.shoppingCarList.filter(function (v) {
                            return v.id == data.id
                        })
                        if (item.length > 0) {
                            item[0].total++;
                            console.log('增加数量',item);
                        } else {
                            this.shoppingCarList.push(data); // 添加购物车的数据
                            console.log('新增');
                        }
                    } else {
                        this.shoppingCarList.push(data); // 添加购物车的数据
                    }
                    this.shoppingTotal+=1;
            },

            
            MathRoadom() {
                let pirce = Math.random(90 * 90) * 10000;
                return pirce.toFixed(2);
            },
            formatDates() {//时间戳转日期
                let date = new Date();
                let y = date.getFullYear();
                let MM = date.getMonth() + 1;
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                var str = "";
                let week = new Date().getDay();
                if (week == 0) {
                    str = "星期日";
                } else if (week == 1) {
                    str = "星期一";
                } else if (week == 2) {
                    str = "星期二";
                } else if (week == 3) {
                    str = "星期三";
                } else if (week == 4) {
                    str = "星期四";
                } else if (week == 5) {
                    str = "星期五";
                } else if (week == 6) {
                    str = "星期六";
                }
                return y + '-' + MM + '-' + d + ' ' + str

                // return y + '-' + MM + '-' + d;
            }
        }
    })
}
