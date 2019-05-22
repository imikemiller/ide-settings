module.exports = {
  def:function(Sequelize){
    return {
      id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey:true },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }
  }
}