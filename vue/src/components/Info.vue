<!--详情模块-->
<template>
    <section id="goodsInfo">
          <div class="top">
              <div class="top_left">
                  <div class="logoImg"><img src="" alt=""></div>
                  <p>出：100=100</p>
                  <p>收：100=102</p>
              </div>
              <div class="dlInfo">
                  <p>游戏ID：<span id="gameid" v-text="gameId"></span></p>
                  <p>账号余额：<span id="myMoney">12455</span>（游戏币）</p>
                  <p><button class="layui-btn layui-btn-small layui-btn-warm" id="payBtn">充值</button></p>
              </div>
              <div class="dlEdit">
                  <!--<button id="sqBtn" class="layui-btn layui-btn-warm">申请代理</button>-->
                  <div id="edit_btn_group">
                      <div>
                          <button id="setCard" class="layui-btn layui-btn-warm">设置名片</button>
                      </div>
                      <div>
                          <button id="sell" class="layui-btn layui-btn-warm">销售</button>
                      </div>
                  </div>
              </div>
          </div>
          <div class="btnGroup">
              <button  class="layui-btn layui-btn-normal">综合排序</button>
              <button  class="layui-btn layui-btn-normal">价格排序</button>
              <button  class="layui-btn layui-btn-normal">存货排序</button>
              <button  class="layui-btn layui-btn-normal">买/卖</button>
          </div>
          <div class="businesList">
              <table id="dataTable">
                  <thead>
                      <tr>
                          <th>商家名称</th>
                          <th>比例</th>
                          <th>数量</th>
                          <th>价格</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                              <span class="sell red">买</span>
                              <span class="pub">花花<br>商行</span>
                              <span class="pub_name">花花商行</span>
                          </td>
                          <td>100=100</td>
                          <td>100</td>
                          <td>￥100</td>
                          <td>
                              <button  class="layui-btn layui-btn-warm layui-btn-small deal" data-i="sell">出售</button>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <span class="sell green">卖</span>
                              <span class="pub">花花<br>商行</span>
                              <span class="pub_name">花花商行</span>
                          </td>
                          <td>100=100</td>
                          <td>100</td>
                          <td>￥100</td>
                          <td>
                              <button  class="layui-btn layui-btn-warm layui-btn-small deal" data-i="buy">购买</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </section>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['gameId']
    }
</script>