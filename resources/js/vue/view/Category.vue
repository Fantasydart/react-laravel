<template>
    <wrapper :title="'Категории'">
        <wrapper class="category-btn">
            <form action="">
                <div class="row">
                    <div class="col-md-3">
                        <input type="text" placeholder="Название" class="form-control">
                    </div>
                    <div class="col-md-3">
                        <button class="btn btn-primary">Создать</button>
                    </div>
                </div>
            </form>
        </wrapper>
      <wrapper>
          <table class="table table-dark">
              <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Название</th>
                  <th scope="col">slug</th>
                  <th scope="col">Действие</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row"></th>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              </tbody>
          </table>
      </wrapper>
    </wrapper>
</template>

<script>
import Wrapper from "../components/Wrapper"
export default {

    name: "Category",
    components: {
        'wrapper': Wrapper,
    }
}
</script>

<style scoped>

</style>
