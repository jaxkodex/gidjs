

define(['app/app'], function (app) {
	app.templates = {
		topBar: '<div class="container"><p class="navbar-text navbar-right">Hola mundo!</p></div>',
		main: '<div class="row content-view-div"><div class="col-md-3">Hola</div><div class="col-md-9">Mundo</div></div>',
		popUpWindow: '<div class="popup-window-title"><div class="popup-window-move"></div><%=title%><button type="button" class="close close_popupwindow" aria-hidden="true">&times;</button></div><div class="popup-window-body row"><div><%=body%></div></div>',
		login: '<form role="form"><div class="form-group"><label for="username">Usuario</label><input type="text" id="username" class="form-control input-sm" /></div><div class="form-group"><label for="password">Contraseña</label><input type="password" id="password" class="form-control input-sm" /></div><input type="submit" class="btn btn-sm btn-primary" value="Ingresar" /></form>',
		userList: '<table class="table usuarios_list"><thead></thead><tbody></tbody></table>',
		userItemList: '<td><%=username%></td><td><button class="btn btn-xs btn-warning editme"><span class="glyphicon glyphicon-pencil"></span></button><button class="btn btn-xs btn-danger deleteme"><span class="glyphicon glyphicon-remove"></span></button></td>',
		userEditForm: '<form role="form"><div class="form-group"><label for="username">Usuario</label><input type="text" id="username" class="form-control" value="<%=username%>" /></div><div class="form-group"><label for="name">Nombre</label><input type="text" id="name" class="form-control" value="<%=name%>" /></div></form>'
	};
	return {
		getTemplates: function () { return app.templates; }
	};
});