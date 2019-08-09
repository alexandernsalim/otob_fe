<template>
    <div class="boxMain">

      <div class="boxImg">
        <img src="@/assets/bli-logo.png">
      </div>

      <div class="boxTitle">
        <h2>
            <slot name="slot-title">
                Default
            </slot>
        </h2>
      </div>

      <div class="boxForm">
        <slot name="slot-form">
            Default
        </slot>
      </div>

      <div class="boxNotif">
        <slot name="slot-notif">
            Default
        </slot>
        </div>
      
    </div>
</template>

<style>
h2{
  color: rgb(2, 122, 200);
}
.boxMain{ 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  border: 1px solid #d2d6de;
  border-radius: 10px;
  transition: transform 2s;
  font-family: sans-serif;
  width: 500px;
  background-color: white;
}
.boxMain:hover {
  box-shadow: 0 1px 10px #999; 
}
.boxImg, .boxTitle{
  text-align: center;
  padding-bottom: 0.5em;
}
.boxImg img{
  height: auto; 
  border-radius: 50%; 
  border: #999999 1px solid;
}
.boxForm input, .boxForm button{
  height: 44px;
  margin-bottom: 0.75em;
}
.boxNotif {
  font-size: 12px;
  text-align: right;
}
</style>
