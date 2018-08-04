(function () {
  'use strict';

  const deleteButton = $("#delete")
  deleteButton.click(()=>{
    const id = deleteButton.data('id')
    const _csrf = deleteButton.data('csrf')
    console.log(id);

    $.ajax({
      uel: `/posts/${ id }`,
      method: 'DELETE',
      data: {
        _csrf
      },
      success:(res)=>{
        console.log(res);
      }
    })
  })
}())
