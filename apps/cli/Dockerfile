FROM docker.io/node:lts-alpine

WORKDIR /app

RUN addgroup --system cli && \
          adduser --system -G cli cli

COPY dist/apps/cli cli/
RUN chown -R cli:cli .

RUN npm --prefix cli --omit=dev -f install
RUN cd cli && npm link

ENTRYPOINT ["fugletrader"]
