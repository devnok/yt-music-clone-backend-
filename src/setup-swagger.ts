import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import type { INestApplication } from '@nestjs/common';
import { version } from '../package.json';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .addBasicAuth()
    .setTitle('API')
    .setVersion(version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document);
}