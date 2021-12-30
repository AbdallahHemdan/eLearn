<template>
  <div class="posts">
    <div class="post">
      <div class="post__header">
        <img src="https://i.pravatar.cc/300" class="user__img" alt="user photo" />

        <div class="user__info">
          <div class="user__name">Eduardo Benz</div>
          <div class="post__date">Posted on Dec 6, 2022</div>
        </div>
      </div>

      <div class="post__body">
        Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois
        divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi
        eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia
        nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss
        quisso pudia ce receita de bolis, mais bolis eu num gostis.
      </div>

      <div class="answers">
        <div class="answer">
          <div class="comment__img-wrapper">
            <img src="./../../../assets/comment.png" alt="" class="comment__img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
};
</script>

<style lang="scss" scoped>
.post {
  padding: 24px 24px;
  border-radius: 10px;
  border: 1px solid rgba(108, 122, 137, 0.25);
}

.user__img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
}

.post__header {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
}

.user__info {
  display: flex;
  flex-direction: column;
}

.post__date {
  color: gray;
  font-size: small;
}

.post__body {
  color: $darker-gray;
  margin-bottom: 32px;
}

.comment__img-wrapper {
  width: 35px;
  height: 35px;
  padding: 4px;
  border-radius: 50%;
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comment__img {
  width: 20px;
  height: 20px;
}
</style>
