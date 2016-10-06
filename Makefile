VERSION=$(shell scripts/obtenerVersion.sh)
NOMBRE="repo-frontend"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m
L=[01;30m

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${G}${NOMBRE}${N} - ${Y}versión: ${VERSION}${N}"
	@echo ""
	@echo "  ${Y}Para desarrolladores${N}"
	@echo ""
	@echo "    ${G}iniciar${N}              Instala todas las dependencias."
	@echo ""
	@echo ""
	@echo "  ${Y}Para distribuir${N}"
	@echo ""
	@echo "    ${G}version_patch${N}        Genera una versión (0.0.PATCH)."
	@echo "    ${G}version_minor${N}        Genera una versión (0.MINOR.0)."
	@echo "    ${G}version_major${N}        Genera una versión (MAJOR.0.0)."
	@echo ""
	@echo "    ${G}deploy${N}               Sube el sitio a http://repo-frontend.surge.sh"
	@echo ""
	@echo ""

iniciar:
	@echo "${G}instalando dependencias ...${N}"
	@npm install
	@bower install --allow-root

version_patch:
	ember release

version_minor:
	ember release --minor

version_major:
	ember release --major

deploy:
	ember build --prod
	cd dist; surge -d repo-frontend.surge.sh
